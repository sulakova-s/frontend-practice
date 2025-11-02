/**
 * Cookie Monster - Eye Tracking System
 * Eye movement with cross-eye convergence effect
 */

const pupils = document.querySelectorAll(".pupil");

const CONFIG = {
  CROSS_EYE_ZONE: 200, // Area where cross-eye effect activates
  BASE_OFFSET: -100, // Base eye position offset
  CROSS_OFFSET: 40, // Cross-eye adjustment
  VERTICAL_OFFSET: 70, // Vertical tilt for each eye
  NATURAL_LIMIT: 0.7, // Pupil movement limit (70% of available space)
  VERTICAL_REDUCTION: 0.9, // Reduce vertical movement for natural look
};

document.addEventListener("mousemove", (event) => {
  pupils.forEach((pupil, index) => {
    const eye = pupil.parentElement;

    // 1. Get eye center position
    const eyeCenter = getEyeCenter(eye);

    // 2. Calculate cross-eye effect based on cursor distance
    const crossEyeEffect = calculateCrossEyeEffect(event.clientX, eye, index);

    // 3. Calculate target point with offsets
    const target = calculateTargetPoint(
      event.clientX,
      event.clientY,
      crossEyeEffect
    );

    // 4. Calculate pupil movement within eye boundaries
    const movement = calculatePupilMovement(target, eyeCenter, eye, pupil);

    // 5. Apply movement to pupil
    applyPupilMovement(pupil, movement);
  });
});

function getEyeCenter(eye) {
  const rect = eye.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

function calculateCrossEyeEffect(cursorX, eye, eyeIndex) {
  const eyeRect = eye.getBoundingClientRect();
  const faceCenterX = (eyeRect.left + eyeRect.right) / 2;

  // Distance from cursor to face center
  const distanceFromCenter = Math.abs(cursorX - faceCenterX);

  // closeness: 0 = far, 1 = close
  // Examples:
  // 0px from center → 1.0 (max cross-eye)
  // 100px → 0.5 (half effect)
  // 200px+ → 0.0 (effect off)
  const closeness = 1 - Math.min(distanceFromCenter / CONFIG.CROSS_EYE_ZONE, 1);

  // Left eye: -100 → +40, Right eye: +100 → -40
  // Left eye (eyeIndex === 0):
  //   closeness = 0 (far): -(-100) + (40 + (-100)) * 0 = 100
  //   closeness = 1 (close): -(-100) + (40 + (-100)) * 1 = 40
  // Right eye (eyeIndex === 1):
  //   closeness = 0 (far): -100 - (40 + (-100)) * 0 = -100
  //   closeness = 1 (close): -100 - (40 + (-100)) * 1 = -40
  const offsetX =
    eyeIndex === 0
      ? -CONFIG.BASE_OFFSET +
        (CONFIG.CROSS_OFFSET + CONFIG.BASE_OFFSET) * closeness
      : CONFIG.BASE_OFFSET -
        (CONFIG.CROSS_OFFSET + CONFIG.BASE_OFFSET) * closeness;

  // Slight tilt: left eye up, right eye down
  const offsetY =
    eyeIndex === 0 ? -CONFIG.VERTICAL_OFFSET : CONFIG.VERTICAL_OFFSET;

  return { offsetX, offsetY, closeness };
}

function calculateTargetPoint(cursorX, cursorY, crossEyeEffect) {
  return {
    x: cursorX + crossEyeEffect.offsetX,
    y: cursorY + crossEyeEffect.offsetY,
  };
}

function calculatePupilMovement(target, eyeCenter, eye, pupil) {
  const eyeRect = eye.getBoundingClientRect();
  const pupilRect = pupil.getBoundingClientRect();

  // Vector from eye center to target
  const deltaX = target.x - eyeCenter.x;
  const deltaY = target.y - eyeCenter.y;

  // Maximum possible movement
  const maxMovement = (eyeRect.width - pupilRect.width) / 2;

  // Convert to pupil movement
  // deltaX / eyeRect.width = how far the target is (0% to 100%)
  // * maxMovement = convert percentage to pixels
  let moveX = (deltaX / eyeRect.width) * maxMovement;
  let moveY = (deltaY / eyeRect.height) * maxMovement;

  // Constrain movement
  moveX = clamp(
    moveX,
    -maxMovement * CONFIG.NATURAL_LIMIT,
    maxMovement * CONFIG.NATURAL_LIMIT
  );
  moveY = clamp(
    moveY,
    -maxMovement * CONFIG.NATURAL_LIMIT,
    maxMovement * CONFIG.NATURAL_LIMIT
  );

  // Reduce vertical movement
  moveY *= CONFIG.VERTICAL_REDUCTION;

  return { x: moveX, y: moveY };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function applyPupilMovement(pupil, movement) {
  pupil.style.transform = `translate(-50%, -50%) translate(${movement.x}px, ${movement.y}px)`;
}

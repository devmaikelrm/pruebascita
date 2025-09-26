// Centralized selectors for citaconsular.es website
export const SELECTORS = {
  // Welcome modal and initial button
  welcomeModal: {
    container: '.modal, [role="dialog"]',
    continueButton: '#idCaptchaButton, button:contains("Continue"), button:contains("Continuar")',
    closeButton: '.close, .modal-close, [aria-label="close"]'
  },

  // Bookitit appointment slots view
  appointmentSlots: {
    container: '.slots-container, .time-slots, .appointment-slots',
    availableSlot: '.slot.available, .time-slot:not(.disabled), .slot:not(.booked)',
    slotTime: '.time, .slot-time, .hour',
    availableText: ':contains("Huecos libres"), :contains("Available")',
    noSlotsMessage: ':contains("No hay huecos"), :contains("No slots available")'
  },

  // Login form
  loginForm: {
    container: '.login-form, form[action*="login"], #login-form',
    usernameField: 'input[name="username"], input[name="user"], #username, #user',
    passwordField: 'input[name="password"], input[name="pass"], #password, #pass',
    submitButton: 'input[type="submit"], button[type="submit"], .login-btn, .btn-login',
    errorMessage: '.error, .alert-danger, .login-error'
  },

  // Success confirmation page
  successPage: {
    container: '.success, .confirmation, .appointment-confirmed',
    successMessage: ':contains("SU RESERVA SE HA REALIZADO CON ÉXITO"), :contains("BOOKING CONFIRMED")',
    confirmationDetails: '.booking-details, .confirmation-details, .appointment-info',
    loginField: ':contains("Login:"), :contains("Usuario:")',
    nameField: ':contains("Nombre:"), :contains("Name:")',
    dateField: ':contains("Fecha:"), :contains("Date:")',
    timeField: ':contains("Hora:"), :contains("Time:")',
    serviceField: ':contains("Servicio:"), :contains("Service:")'
  },

  // Error page (blocking detection)
  errorPage: {
    container: '.error-page, .blocked-page',
    errorMessage: ':contains("error-cita.aspx"), :contains("blocked"), :contains("bloqueado")',
    retryButton: '.retry, .try-again, .volver'
  },

  // Captcha elements
  captcha: {
    container: '.captcha, .recaptcha, .g-recaptcha',
    image: '.captcha-image, img[src*="captcha"]',
    input: 'input[name*="captcha"], .captcha-input',
    submitButton: '.captcha-submit, input[value*="Verify"]'
  },

  // General loading and navigation
  general: {
    loadingSpinner: '.loading, .spinner, .loader',
    nextButton: '.next, .siguiente, .continue',
    backButton: '.back, .anterior, .previous',
    cancelButton: '.cancel, .cancelar, .close'
  }
};

// Helper function to build comprehensive selector list
export function buildSelector(selectorGroup: Record<string, string>): string {
  return Object.values(selectorGroup).join(', ');
}

// Specific selector combinations for common actions
export const COMBINED_SELECTORS = {
  anyAvailableSlot: buildSelector(SELECTORS.appointmentSlots),
  anyLoginField: buildSelector(SELECTORS.loginForm),
  anySuccessIndicator: buildSelector(SELECTORS.successPage),
  anyErrorIndicator: buildSelector(SELECTORS.errorPage),
  anyCaptcha: buildSelector(SELECTORS.captcha)
};

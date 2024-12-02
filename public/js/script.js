
// registration dialog confirmation 
document.addEventListener('DOMContentLoaded', function() {
  const confirmButton = document.getElementById('confirmRegistration');
  confirmButton.addEventListener('click', function() {
    // When the user confirms, submit the form
    document.getElementById('registrationForm').submit();
  });
});
// add article dialog confirmation 
document.addEventListener('DOMContentLoaded', function() {
  const confirmButton = document.getElementById('confirmCreate');
  confirmButton.addEventListener('click', function() {
    // When the user confirms, submit the form
    document.getElementById('articleForm').submit();
  });
});
// update article dialog confirmation 
document.addEventListener('DOMContentLoaded', function() {
  const confirmButton = document.getElementById('confirmUpdate');
  confirmButton.addEventListener('click', function() {
    // When the user confirms, submit the form
    document.getElementById('editArticleForm').submit();
  });
});
// delete article dialog confirmation 
function openDeleteConfirmationModal(articleId) {
  const confirmDeleteButton = document.getElementById('confirmDeleteButton');
  confirmDeleteButton.href = '/articleDelete/' + articleId;

  const deleteConfirmationModal = new bootstrap.Modal(document.getElementById('deleteConfirmationModal'));
  deleteConfirmationModal.show();
}
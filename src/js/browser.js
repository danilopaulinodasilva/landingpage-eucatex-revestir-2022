if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  localStorage.setItem('browser', 'Mobile');
} else {
  localStorage.setItem('browser', 'Desktop');
}

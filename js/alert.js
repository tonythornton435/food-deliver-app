
exports const hideAlert=()=>{
  const el=document.querySelector('.alert');
  if(el) el.parentElement.removeChile(el);
}
const showalert=(type,msg)=>{
  hideAlert();
  const markup=`<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin',markup);
window.setTimeout(hideAlert,5000);
}

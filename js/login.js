
 const hideAlert=()=>{
  const el=document.querySelector('.alert');
  if(el) el.parentElement.removeChile(el);
}
const showalert=(type,msg)=>{
  hideAlert();
  const markup=`<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin',markup);
window.setTimeout(hideAlert,5000);
}
const logoutbtn=document.querySelector('.nav__el--logout');
const formbtn=document.querySelector('.form');

 const login=async(email,password)=>{
try{ 
  const res=await axios({
    method:'POST',
    url:'http://127.0.0.1:3000/api/v1/users/login',
    data:{
      email,password
    }
    });
    if(res.data.status==='success'){
showalert("success","loggedin");

      window.setTimeout(()=>{
        location.assign('/');
        },1500)
    }
    console.log(res);
}
catch(err){
showalert("bad","loggedout");

}
}
const logout=async ()=>{

  try{
    const res= await axios({
      method:'GET',
      url:'http://127.0.0.1:3000/api/v1/users/logout'
      });
      if(res.data.status='success'){
        location.reload(true);
        showalert("loggedout","thanku");
      }
  }
  catch(err){
    showalert("error","sorry");
  }
}

if(formbtn){
formbtn.addEventListener('submit',e=>{
  e.preventDefault();
  const email=document.getElementById('email').value;
  const password=document.getElementById('password').value;
login(email,password);
  });
}
if(logoutbtn){
logoutbtn.addEventListener('click',logout);
}

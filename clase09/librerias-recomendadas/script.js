const btn = document.querySelector("button");
const toast = document.querySelector('.toast')



btn.addEventListener("click",()=>{
    Swal.fire("SweetAlert2 is working!");
})


toast.addEventListener("click",()=>{
Toastify({
  text: "This is a toast",

  duration: 3000,
}).showToast();
})

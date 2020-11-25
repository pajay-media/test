//display modal  box
let modal_1=document.getElementById('modal_1');
let modal_2=document.getElementById('modal_2');


const display=(param)=>{
	let modal=document.getElementById(param);
modal.style.display='block';
};
//close modal box on body click here
window.onclick = (event)=> {
  if (event.target == modal_1 || event.target == modal_2) {
    modal_1.style.display = "none";
    modal_2.style.display = "none";
  }
};

const closes=(close)=>{
		document.getElementById(close).style.display="none";
	};

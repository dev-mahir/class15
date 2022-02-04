



const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hours = document.querySelector('.hour');

setInterval(()=>{
    let date = new Date();
    let current_sec = date.getSeconds();
    let current_min = date.getMinutes();
    let current_hour = date.getHours();

    sec.style.transform = `rotate(${deg( 60,current_sec )}deg)`;
    min.style.transform = `rotate(${deg( 60,current_min )}deg)`;
    hours.style.transform = `rotate(${deg( 12,current_hour )}deg)`;

},1000);


function deg( time, current_time ){
    return ( 360 * current_time ) / time;
};














// analog clock 
const second = document.querySelector('.s');
const minute = document.querySelector('.m');
const hour = document.querySelector('.h');


setInterval(()=>{
    let date = new Date();
    let current_sec = date.getSeconds();
    let current_min = date.getMinutes();
    let current_hour = date.getHours();

    second.style.transform = `rotate(${deg( 60,current_sec )}deg)`;
    minute.style.transform = `rotate(${deg( 60,current_min )}deg)`;
    hour.style.transform = `rotate(${deg( 12,current_hour )}deg)`;

},1000);


function deg( time, current_time ){
    return ( 360 * current_time ) / time;
};



// Calculator 
const display_top = document.querySelector('.display-top');
const display_bottom = document.querySelector('.display-bottom');

let val_arr = [];
let valGet = (val) =>{
  val_arr.push(val);
  let val_str = val_arr.join('');
  display_top.innerHTML = val_str;
  display_bottom.innerHTML = 0;
}


let back = ()=>{
    val_arr.pop();
    let str = val_arr.join('');
    display_top.innerHTML = str;
}

let allClear = () =>{
    val_arr = [];
    display_top.innerHTML = 0;
    display_bottom.innerHTML = '';
}

let result = () =>{

    if( val_arr == ''){
        display_bottom.innerHTML = '';
    }else{
        display_bottom.innerHTML = eval(val_arr.join(''));
    }

}





// instant data with checkbox 
const skills = document.querySelectorAll('.skill');
const show = document.querySelector('.show');

skills.forEach( skill => {
  skill.addEventListener('change',function(){
    let all_data = document.querySelectorAll('.skill:checked');

    let data_arr = [];
    all_data.forEach( da =>{
      data_arr.push(da.value);
    });
    
    let list = '';
    data_arr.map( data =>{
        list +=  `  <li class="list-group-item">${data}</li> `;
    });
    show.innerHTML = list;
  });
});

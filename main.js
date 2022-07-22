const video = document.querySelector('.video');
const inputSearch = document.querySelector('#search');
const btnSearch = document.querySelector('#btn-search');
const inputCourse = document.querySelector('#addcourse');
const btnAdd = document.querySelector('#add');

const nameCourse = document.querySelector('#name-course');

let course1 = '<iframe width="1031" height="580" src="https://www.youtube.com/embed/y0B-vQI6Tiw?list=PLxI8Can9yAHf8k8LrUePyj0y3lLpigGcl" title="Estrutura de Dados - Aula 1 - Apresentação da disciplina" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

const iFrameCourseList = [course1];
const listNameCourse = ['Estrutura de dados'];
createNameCourse(listNameCourse[0]);


function createNameCourse(name){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = name;
    a.classList.add('name-link')
    li.appendChild(a);
    document.querySelector('.list-course').appendChild(li);
    return li;
}

video.innerHTML = iFrameCourseList;

btnAdd.addEventListener('click', ()=>{
    iFrameCourseList.push(inputCourse.value);
    listNameCourse.push(nameCourse.value)
    
    createNameCourse(nameCourse.value);

    console.log(iFrameCourseList);
    console.log(listNameCourse);
    
});


/*<li class="course"><a href="https://www.youtube.com/watch?v=y0B-vQI6Tiw&list=PLxI8Can9yAHf8k8LrUePyj0y3lLpigGcl&index=30">Estrutura de Dados</a></li>
                <li class="course"><a href="https://www.youtube.com/watch?v=v8vxTtT2S_0&list=PLxI8Can9yAHc-_dZ6nsfoon08i2-4OvEk">Rede de Computadores</a></li>
                <li class="course"><a href="https://www.youtube.com/watch?v=ciQ2FObc3tc&list=PLxI8Can9yAHfeoA_yMm9iKJVxQprljmL9&index=1">Engenharia de Software</a></li>
                <li class="course"><a href="https://www.youtube.com/watch?v=UozK0CWqPEQ&list=PLxI8Can9yAHdMuYkWVUBeMTMsOTSxYskk">Projeto de Sistemas Computacionais</a></li>
                <li class="course"><a href="https://www.youtube.com/watch?v=Rl6HhDvW984&list=PLxI8Can9yAHeK7GUEGxMsqoPRmJKwI9Jw">Sistemas Operacionais</a></li>
                <li class="course"><a href="https://www.youtube.com/watch?v=kKgWNDAYJOw&list=PLxI8Can9yAHdNN5fpKWRF8bbLG-2P-0LW">Projeto e Análise de Algoritimo</a></li>
                <li class="course"><a href="https://www.youtube.com/watch?v=ib3F1c2oKpA&list=PLxI8Can9yAHcXBgFryV0AV7LYdLR1skuF">Fundamentos Mátematicos</a></li>
                <li class="course"><a href="https://www.youtube.com/watch?v=J3JhWU4_H_Y&list=PLxI8Can9yAHdhRx3TIqX_B3C20ETZEV_V&index=2">Pensamentos Computacional</a></li>*/
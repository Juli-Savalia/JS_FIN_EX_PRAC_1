let record = [];

let tbl = "";

const ViewL = () => {
    let lists = JSON.parse(localStorage.getItem("Keeper")) ? JSON.parse(localStorage.getItem("Keeper")) : [];

    lists.map((items)=>{
        return (
            tbl += `
                    <div class = "d-flex">
                        <div class="w-25 bg-white p-4 my-4 rounded-3 shadow">
                            <h4 class="fsw-bold fs-2">${items.title}</h4>
                            <h4 class="fst-italic text-secondary fs-5 py-2">${items.tasks}</h4>
                            <button onclick="Del("${items.id}")">x</button>
                        </div>
                    </div>
                 `
        )
    })

    document.getElementById("categories").innerHTML = tbl;
}

ViewL();

const add = () => {
    let title = document.getElementById("title").value; 
    let tasks = document.getElementById("tasks").value; 

    if(!title || !tasks)
    {
        alert( "Please fill out all fields" );
    }
    else{
    let obj = {
        id : Math.floor(Math.floor(Math.random() * 100)),
        title : title,
        tasks : tasks
    };
    if(JSON.parse(localStorage.getItem("Keeper"))===null || JSON.parse(localStorage.getItem("Keeper"))===undefined)
    {
        record.push(obj);
        localStorage.setItem("Keeper",JSON.stringify(record));
        document.getElementById( "form" ).reset();
        ViewL();
    }
    else{
        let old = JSON.parse(localStorage.getItem("Keeper"));
        old.push(obj);
        localStorage.setItem("Keeper",JSON.stringify(old))
    }
    document.getElementById("title").innerHTML = "";
    document.getElementById("tasks").innerHTML = "";
    ViewL();
}
}

const Del = (id) => {
    let lists = JSON.parse(localStorage.getItem("Keeper"));
    let  del = lists.filter((x)=>
    {
        x.id != id;

    });
    localStorage.setItem('Keeper',JSON.stringify(del));
    ViewL();
}


let editRowId = 0
let row = 0;

function clearInput() {
    $('#mainName').val("")
    $('#mainLast').val("")
}

function toggleAll(ctx) {
    let checkboxes = $('.tableCb');

    Array.from(checkboxes).forEach((box) => {
        box.checked = ctx.checked
    });
    refreshTotalItemCounter();
}

function toggleCheckbox() {
    refreshTotalItemCounter();
}

function refreshTotalItemCounter() {
    let checkboxes = $('.tableCb');
    let count = 0;

    Array.from(checkboxes).forEach((box) => {
        if (box.checked) {
            count++;
        } 
    });

    document.getElementById('Total_selected').innerHTML = `Total ${count} selected row`;
}

function deletAll() {

    document.querySelectorAll('#tableData .tableCb:checked').forEach(e => {
        e.parentNode.parentNode.remove()

    });
    refreshTotalItemCounter()
}

function addNameRow() {
    const firstName = $('#mainName').val();
    const lastName = $('#mainLast').val();
    const backgroundcolor = $("#bgcolor").val();
    const textsize = $('#textS').val();

    console.log (textsize)

    if (firstName != "" && lastName != "") {
        row++;
        let table = $('tableData');
         $('#tableData').append(`<tr id="tr${row}" > </tr>`);

         $(`#tr${row}`).append(`<td id ="td${row}" > </td>`);

         $(`#td${row}`).append(`<input type="checkbox" id ="${row}"  class = "tableCb"  onchange = toggleCheckbox() > `)


         $(`#td${row}`).append(`<input type="text" id ="firstName${row}" style="background-color:${backgroundcolor};font-size:${textsize}"  value = "${firstName}">`)
        
         $(`#td${row}`).append(`<input type="text" id ="lastName${row}" style="background-color:${backgroundcolor};font-size:${textsize}"  value ="${lastName}">`)
        

         $(`#td${row}`).append(`<button class = "btn btn-primary mr-2 " onclick = edit_row(this) id = "${row}"> Edit </button>`)
        

         $(`#td${row}`).append(`<button class = "btn btn-danger  " onclick = delet_row(this) id = "${row}"> delet </button>`)

         $(`#tr${row}`).hide().fadeIn();


        clearInput()

    }
    else alert("hmmmmm it's empty i think")
}



function edit_row(e) {
    editRowId = e.id;
    console.log(editRowId)
    $('#chang_btn').html(` <button  id="updateRow" onclick="update_btn(${editRowId})" class="btn btn-outline-primary">update</button>`);
    $('#mainName').val($(`#firstName${editRowId}`).val())
    $('#mainLast').val($(`#lastName${editRowId}`).val()) 
    console.log(editRowId)

}

function delet_row(e) {

    $(e).closest("tr").fadeOut();
    $(e).closest("tr").remove();
    console.log(e.id)
   
}

function update_btn() {
    let firstName = $('#mainName').val();
    let lastName = $('#mainLast').val();

    console.log(firstName, editRowId)
    $(`#firstName${editRowId}`).val(firstName) 
    $(`#lastName${editRowId}`).val(lastName) 
    console.log(editRowId)
    
    $('#mainName').val("") 
    $('#mainLast').val("") 

    $('#chang_btn').html(`<button id="chang_btn" type="button p-2" class="btn btn-primary" onclick="addNameRow()">add</button>`) 
    edit_id = 0;
}

function apply_changes(){
    const bg_color= $('#changeBack').val();
    const text_size = $('#change_text_size').val();
    
      $(".tableCb").each(function(){
          if($(this).prop('checked')){
            let id = this.id;
            console.log(id)
              $(`#firstName${id}`).css({ background:bg_color});
              $(`#lastName${id}`).css({ background:bg_color});

              $(`#firstName${id}`).css({ fontSize:text_size});
              $(`#lastName${id}`).css({ fontSize:text_size });


            }
      })
    
}

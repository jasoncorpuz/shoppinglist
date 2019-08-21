//enter items they need to purchase if hit 'return' key or 'add item' button
//check/uncheck items clicking check button
// permanently remove items from list
//hints: .submit(), .preventDefault(), toggleClass(), .closest().
// event.preventDefault(); in everything? only in form submits
//check if linked

$(function() {
    $('#js-shopping-list-form').on('submit', (event) => {
        //only use submit on forms
     event.preventDefault();
     let submission = $('#shopping-list-entry').val();
     $('#shopping-list-entry').val(" "); //clears submit box
    $('ul').append(
        //.val grabs value 
        // keep in mind to target class/id, UL is general!
        // to append you need ALL elements, not just parent
        // grab what's from the input when submitted
        // then insert it between <span=shopping item>
        `<li>
        <span class="shopping-item">${submission}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
        );
    });

});

$('.shopping-list').on('click','.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
    //this = shopping item delete
    // .closest (closest parent item)
})
//on click happens ONCE !!target parent!! parent.on
// use events when a sequence of code happens 

$('.shopping-list').on('click','.shopping-item-toggle', function(event) {
    event.stopPropagation();
    $(this).closest('li').toggleClass('shopping-item__checked');

})

//chain of fools
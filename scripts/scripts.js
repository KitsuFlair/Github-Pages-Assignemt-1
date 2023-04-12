async function getData(chosen_major) {
    var response = await fetch('cit5students.json');   // this is an ajax GET request

    if(response.ok) {
        var data = await response.json();

        majors = data.filter( (item) => item.major == chosen_major );    // filter data array for selected meal items 
            
       var templateText = document.getElementById('majorsTemplate').innerHTML;
       var compiledTemplateText = Handlebars.compile(templateText);   // get and compile template code
       compiledHtml = compiledTemplateText({ rows: majors })      // apply data to template
       document.getElementById('majorsResults').innerHTML = compiledHtml; 
   }
   else {
       document.querySelector('#majorsResults').innerHTML = "There was an error, or menu items not found";
   }	

}

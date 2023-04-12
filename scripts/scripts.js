async function getData(chosen_major) {
    var response = await fetch('cit5students.json');

    if(response.ok) {
        var data = await response.json();

        majors = data.filter( (item) => item.major == chosen_major );
            
       var templateText = document.getElementById('majorsTemplate').innerHTML;
       var compiledTemplateText = Handlebars.compile(templateText);
       compiledHtml = compiledTemplateText({ rows: majors });
       document.getElementById('majorTable').innerHTML = compiledHtml; 
   }
   else {
       document.querySelector('#majorTable').innerHTML = "There was an error, or major not found";
   }	

}

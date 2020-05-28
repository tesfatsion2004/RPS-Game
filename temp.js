function replacejsfile(oldfilename, newfilename, filetype)
{
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist using
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--) //search backwards within nodelist for matching elements to remove
        {
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1)
        {
            var newelement=createjscssfile(newfilename, filetype)
            allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i])
        }
      }
    }



function replacejsfile(newfilename)
{
    let my_script= document.getElementById('myScript');
    let oldfilename= my_script.getAttribute('src');
    console.log('New file: '+ newfilename);
    if (my_script && my_script.getAttribute('src')!=null && my_script.getAttribute(src).indexOf(oldfilename)!=-1)
    {
        let newelement =document.createElement('script')
        newelement.setAttribute("type","text/javascript")
        newelement.setAttribute("src", newfilename);
        my_script.parentNode.replaceChild(newelement, my_script);
    }
}
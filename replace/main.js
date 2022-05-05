   function wordReplace()
    {
        var div = document.getElementById('catStoy');
        var find = document.getElementById('replaced').value;
        var replace = document.getElementById('replacement').value;

        var re_Find = new RegExp(find, 'gi');
        var myMatch = div.innerHTML.match(new RegExp(find, 'gi'));

        if (myMatch) 
            {
                div.innerHTML = div.innerHTML.replace(re_Find, replace);
            } else {
            myMatch = myMatch ? matches.length : 0;
            documalert(myMatch) = "Not found";
     }
function loadItems() {
        

        const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        const d = new Date();

        let todaysDate= d.getHours()+":"+d.getMinutes()+" "+months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear();
        let params = new URLSearchParams(location.search);
        let name = params.get('lname')+", "+params.get('fname');
        let address = params.get('houseNo')+" "+ params.get('street');
        let cc = params.get('ccNo');
        let ccCode = params.get('ccCode');
        let ccDate = params.get('ccMonth')+"/"+ params.get('ccYear');

        document.getElementById('name').innerHTML = name;
        document.getElementById('time').innerHTML = todaysDate
        document.getElementById('address').innerHTML = address;
        document.getElementById('cc').innerHTML = cc;
        document.getElementById('ccDate').innerHTML = ccDate;
        ;
    }

(function(){
    const HTML_FILES = [
        { name:"_base", link:"_base.html" },
        { name:"メイン画面", link:"main.html" },
        { name:"JSON整形", link:"format_json.html" },
        { name:"文字置き換え", link:"char_converter.html" },
        { name:"テキストエリア", link:"text_area.html" },
    ];

    function setHeader(){
        let header_btn = document.getElementById("header_btn");
        let header_link = document.getElementById("header_link");
        header_link.style.display = "none";

        for(let i=0; i<HTML_FILES.length; ++i){
            let tag = document.createElement("a");
            tag.href = HTML_FILES[i].link;
            tag.innerHTML = HTML_FILES[i].name;
            header_link.appendChild(tag);
        }

        // グレーのゾーンを追加
        let tag = document.createElement("div");
        tag.style.backgroundColor = "#252526";
        tag.style.height = "100vh";
        tag.style.minHeight = "80px";
        tag.style.borderTop = "solid #656565 1px";
        tag.addEventListener("click", ()=>{
            header_link.style.display = "none";
        });
        header_link.appendChild(tag);

        header_btn.addEventListener("click", ()=>{
            if(header_link.style.display == "none"){
                header_link.style.display = "";
                header_link.style.opacity = "0";
                setTimeout(()=>{
                    header_link.style.opacity = null;
                }, 1);
                
            }else{
                header_link.style.display = "none";
            }
        });
        
    }

    function main(){
        setHeader();
    }

    main();
})();
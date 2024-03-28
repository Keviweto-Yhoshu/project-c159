AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: {default : '', type: "string"}
    },
    init: function(){
        this.handleMouseEnterEvents()
        this.MouseLeaveEvents()
    },
    update: function(){
        const fadeBackgroundEl = document.querySelector("#fadeBackground");

        c = fadeBackgroundEl.children;
        if (c.length > 0 ){
            var i;
            for (i = 0; i<= c.length; i++){
                fadeBackgroundEl.removeChild(c[i]);
            }
        }
        else{
            this.handleMouseClickEvent
        }
    },
    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseenter", ()=>{
            this.handleMouseClickEvent();
        })
        
    },
    MouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave", ()=>{
            const {selectedItemId} = this.data;
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if(id == selectedItemId){
                    el.setAttribute("material", {
                        color: "#0077CC",
                        opacity : 1
                    })
                }
            }
        })
    },
    handleMouseClickEvent: function (){
        const id = this.el.getAttribute("id");
        const postersId = ["batman", "avengers","c_pants","spiderman"]
        if(postersId.includes(id)){
            const postersContainer = document.querySelector("#posters-container")
            postersContainer.setAttribute("cursor-listener", {
                selectedItemId: id,
            })
            this.el.setAttribute("material", {
                color: "green", 
                opacity: 1
            })      
        }
        if(selectedItemId){
            fadeBackgroundEl.setAttribute("visible", true);
            fadeBackgroundEl.setAttribute("info-banner",{
                itemId:selectedItemId,
            });
            titleEl.setAttribute("visible", false);
            cursorEl.setAttribute("position",{ x:0, y:0 , z:-1});
            cursorEl.setAttribute("geometry",{
                radiusInner: 0.03,
                radiusOuter:0.04,
            });

        }
        else{
            fadeBackgroundEl.setAttribute("visible","false");
            titleEl.setAttribute("visible",true);
            cursorEl.setAttribute("position",{x:0, y:0, z:-1});
            cursorEl.setAttribute("geometry",{
                radiusInner:0.08,
                radiusOuter:0.12
            })
        }
    }
})
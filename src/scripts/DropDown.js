function DropDown(el) {
    this.dd = el;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: () => {
        let obj = this;

        obj.dd.on('click', function (event) {
            $(this).toggleClass('active');
            event.stopPropagation();
        });
    }
}
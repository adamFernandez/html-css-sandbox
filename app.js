$(function() {
    $('.grid').height( $(window).height() );

    let frame = $('iframe'),
        contents = frame.contents(),
        body = contents.find('body'),
        styleTag = contents
                    .find('head')
                    .append('<style></style>')
                    .children('style'),
        scriptTag = body
                    .find("script:last")
                    .append("<script></script>");

        $('textarea').focus(function() {
            let $this = $(this);            
            console.log($this.attr("id"), scriptTag);
            $this.keyup(function() {
                $this.attr('id')  == 'html' ? 
                    body.html($this.val())
                    : $this.attr('id') == 'css' ? 
                        styleTag.text($this.val())
                        : // it is javascript
                        scriptTag.html($this.val())
            })
        });

});

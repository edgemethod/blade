Binding.registry('anchor',{
    compose: function(  layer, args, outputRef  ){      
        var dom = outputRef.dom,
            id = dom.attr('id') || Binding.generate_id(),
            anchorName = args.pop();
      
      dom.tagName = 'a';
      dom.attr('name', anchorName);
      //dom.text('');
      
      outputRef.dom = dom
    },
    
    
    //we will take the children from here
    stopAutoApplyBindingForChildren : true
});
$(document).ready(function(){
    $("#myform").on('submit',function(event){ 
        event.preventDefault();
        $('#derecho').append(
                    '<div class="control">'
                    +'<div class="col-md-6">'
                    +'<h5></h5>'
                    + '<span>@</span>'
                    + '<p>' + $('#mytweet').val() + '</p>'
                    + '<a href="javascript:void(0)"><i class="fa fa-comment-o" aria-hidden="true"></i></a>'
                    + '<a href="javascript:void(0)"><i class="fa fa-retweet" aria-hidden="true"></i></a>'
                    + '<a href="javascript:void(0)"><i class="fa fa-heart-o likeable" aria-hidden="true"> 0</i></a>'
                    + '<a href="javascript:void(0)"><i class="fa fa-trash-o" aria-hidden="true"></i></a>'
                    + '<a href="javascript:void(0)"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>'
                    + '</div>'
                    + '</div>')
        });
    
    $('#control').on('click','.fa-trash-o', function(event){
        event.preventDefault()
        $(this).parent().parent().fadeOut(500);
        })
    
    $('#control').on('click','.likeable', function(event){
        $(this).html(parseInt($(this).html())+1);
        $(this).removeClass('fa-heart-o').addClass('fa-heart');
        })
})

$('#derecho').on('click', '.boton',function(){
		$(this).parent().fadeOut(500);
	})

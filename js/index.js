$(function(){

  // nav
              $('nav>div>ul>li:nth-child(4)').on('click',function(){
                  let brandName = $(this).attr('name');
                  // console.log(brandName)
                  if(brandName == 'on'){
                      $('#headerWrap').css('height','500px');
                      $('nav>div>ul>li>div').show();
                      $('nav .close').show();
                      $(this).attr('name','off');
                      $('nav>div>ul>li:nth-child(4)>a').css({color:'#6F9475',fontWeight:'bolder'})
                  }
                  else{
                      $('#headerWrap').css('height','194px');
                      $('nav>div>ul>li>div').hide();
                      $('nav .close').hide();
                      $(this).attr('name','on');
                      $('nav>div>ul>li:nth-child(4)>a').css({color:'#595959',fontWeight:'normal'})
                  }
      // close
                  $('nav .close').on('click',function(){
                  $('#headerWrap').css('height','194px');
                  $('nav>div>ul>li>div').hide();
                  $('nav .close').hide();
                  $('nav>div>ul>li:nth-child(4)').attr('name','on')
              });
              })
  
  // Gallery(box01)
              //준비하기
              let galleryWidth = $('#box01>ul>li').width();
              $('#box01>ul>li:last').prependTo('#box01>ul');
              $('#box01>ul').css('margin-left','-'+galleryWidth+'px');
  
              //next
              $('.next').stop().on('click',function(e){
                  $('#box01>ul').animate({marginLeft:'+='+galleryWidth+'px'},1000,function(){
                      $('#box01>ul>li:last').prependTo('#box01>ul');
                      $('#box01>ul').css('margin-left','-'+galleryWidth+'px');
                  })
              });
              //prev
              $('.prev').stop().on('click',function(e){
                  $('#box01>ul').animate({marginLeft:'-='+galleryWidth+'px'},1000,function(){
                      $('#box01>ul>li:first').appendTo('#box01>ul');
                      $('#box01>ul').css('margin-left','-'+galleryWidth+'px');
                  })
              });
  
              // nav
  
  
  
              // let liArr = ['li.pic01','li.pic02','li.pic03']
              // $('#box01>ol>li').on('click',function(e){
              //     let i = $(this).attr('data-num') - 1;
              //     console.log(i)
              //         if(i <= 2){
              //             liArr[i]
              //     }
                  
                   
  
                  
                  // console.log(i)
                  // if(i >= 2)
                                  // let num = $(this).attr('data-num') - 1;
                  // console.log(num)
                  // console.log(liArr)
                  // let i = 0; i++;
                  
              // });
              
  
   
  
  // #box03
          $('#box03 button>a').on('click',function(){
              $('#join').show();
              $('#back').show();
              
              $('#join .close').on('click',function(e){
                  $('#join').hide();
                  $('#back').hide();
              })
          });
  
  // modal
          //준비하기
          $('body').append('<div id="back"></div>');
      // login
          $('header ul>li:first').on('click',function(e){
              $('#login').show();
              $('#back').show();
              
              $('#login .close').on('click',function(e){
                  $('#login').hide();
                  $('#back').hide();
              })
          });
      // join
          $('header ul>li:nth-child(2)').on('click',function(e){
              $('#join').show();
              $('#back').show();
              
              $('#join .close').on('click',function(e){
                  $('#join').hide();
                  $('#back').hide();
              })
          });
  
      // interest
          $('header ul>li:nth-child(3)').on('click',function(e){
              $('#interest').show();
              $('#back').show();
              
              $('#interest .close').on('click',function(e){
                  $('#interest').hide();
                  $('#back').hide();
              })
          });
      // basket
          $('header ul>li:last').on('click',function(e){
              $('#basket').show();
              $('#back').show();
              
              $('#basket .close').on('click',function(e){
                  $('#basket').hide();
                  $('#back').hide();
              })
          });
  
  // view
          //준비하기
              let viewAllWidth = $('#view>section>div').width()/12;
              // console.log(viewAllWidth);
              $('#view>section>div').css('margin-left','-'+viewAllWidth+'px');
          // 움직임
          function action(){
              $('#view>section>div').animate({marginLeft:'-='+viewAllWidth+'px'},1000,function(){
                      $('#view>section>div>figure:first').appendTo('#view>section>div');
                      $('#view>section>div').css('margin-left','-'+viewAllWidth+'px');
                  })
          }
          // 타이머
          function timer(){
              str = setInterval(action,3000)
          }
          function stop(){
              clearInterval(str)
          }
          timer();
  
          // 마우스이벤트
          $('#view>section>div').each(function(){
              $(this).on('mouseover',function(e){
                  stop()
              })
              $(this).on('mouseout',function(e){
                  timer()
              })
          })
  
  
  
          $(window).on('resize',function(e){
          window.location.reload();
        });
  
      }); /*  */
  
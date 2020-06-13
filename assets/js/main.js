$('.tactical_expand').click(function(){
    target_num = $(this).attr('id').split('-')[1];
    content_id = '#tactical_expandable-'.concat(target_num);
    $(content_id).slideToggle('fast');
});



/* Draggable Scripts Popup */
$( function() {
    $( "#ela_draggableDiv" ).draggable({ handle: "div.sideNav-head" });
    $( "div.ela__sideNav_nav_flyout" ).draggable({ containment: 'window' });
    //$( "#ela_draggableDiv" ).draggable({ cancel: "div.ela__sidebarForm_section" });
    //$("div.ela__sidebarForm_section").draggable( 'disable' )
    //$( "div.ela__sidebarForm_section" ).disableSelection();
} );


$( function() {
    $( ".add_ShowPopupDiv" ).draggable({ handle: "div.header" });
    $( "div.add_ShowPopupDiv" ).draggable({ containment: 'window' });
});


$( function() {
    $( "#MapPopTabs" ).tabs();
});

$( function() {
    $( "#Tactabing" ).tabs();
});
$( function() {
    $( "#tac_accordion" ).accordion();
  });



// html demo
$("#treeview").hummingbird();
$( "#checkAll" ).click(function() {
$("#treeview").hummingbird("checkAll");
});
$( "#uncheckAll" ).click(function() {
$("#treeview").hummingbird("uncheckAll");
});
$( "#collapseAll" ).click(function() {
$("#treeview").hummingbird("collapseAll");
});


/* Home Service Carousal Script */
jQuery('.ela_profile_pic').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1
});

jQuery(".panel_add_entity").on('click',function(){
    jQuery('.ela_profile_pic').slick('refresh');
});
jQuery(document).ready(function(){
	
	jQuery(".ela__innerNav_panel").hide();
	//jQuery("#panel_casemanager").show();
    jQuery(".ela__sideNav_nav_flyout").hide();
	var wrapperHeight = jQuery( window ).innerHeight()
	jQuery(".ela__sideNav_nav_flyout").css('min-height',wrapperHeight);
	jQuery(".ela__innerNav_panel").css('min-height',wrapperHeight);
	
	jQuery(".ela__iconLink li a").on('click',function(e){
		e.preventDefault();
		jQuery(".ela__iconLink li").removeClass('active');
		jQuery(this).parent().addClass('active');
		jQuery(".ela__sideNav_nav_flyout").show();
		var ids = jQuery(this).attr('class');
		jQuery(".ela__innerNav_panel").hide();
		jQuery("#"+ids).show();
	})
	jQuery(".closeBtn").on('click',function(e){
		e.preventDefault();
		jQuery(".ela__sideNav_nav_flyout").hide();
	})

    jQuery(".panel_home").on('click',function(e){
        e.preventDefault();
        jQuery(".ela__sideNav_nav_flyout").hide();
        jQuery(".ela__iconLink li.ela_home_icon").removeClass('active');
    })

    /* Live Feed Popup scripts */
    jQuery(".ela__actionTopMid_icons li a.liveFeed_toggle").on('click',function(e){
        e.preventDefault();
        jQuery(".ela__liveFeed_wrapper").removeClass('feed-show');
        jQuery(this).parent().addClass('feed-show');
        jQuery(".ela__liveFeed_wrapper").show();
    })
    jQuery(".ela__liveFeed_wrapper .closeBtn").on('click',function(e){
        e.preventDefault();
        jQuery(".ela__liveFeed_wrapper").hide();
        jQuery(".ela__liveFeed_wrapper").removeClass('feed-show');
    })
});



$(".dropdown-menu li a").click(function(){
  var selText = $(this).attr('data-value');
    $(this).parents('.btn-group').siblings('.menu').html(selText)
});



$(document).ready(function()
{
    $('#nestable-menu').on('click', function(e)
    {
        var target = $(e.target),
            action = target.data('action');
        if (action === 'expand-all') {
            $('.dd').nestable('expandAll');
        }
        if (action === 'collapse-all') {
            $('.dd').nestable('collapseAll');
        }
    });
    $('#nestable3').nestable();
    
    $(".dd-item.dd3-item").on('mouseover',function(){
        //$(".dm_actionBar").hide();
        $(this).addClass('dm_actionBarshow');
    });
    $(".dd-item.dd3-item").on('mouseout',function(){
    	$("li.dd3-item").removeClass('dm_actionBarshow');
    });
    $("#selectAll").on('click',function(e){
    	e.preventDefault();
    	$("input:checkbox").prop('checked', function(i, current) { return !current; });
	});
	$("#clearAll").on('click',function(e){
    	e.preventDefault();
    	$("input:checkbox").prop("checked", false);
	});
    $('.delete-icon').on('click', function(){
        $.confirm({
            title: 'Confirm!',
            content: 'Simple confirm!',
            buttons: {
                confirm: function () {
                    $.alert('All entities under it will be deleted');
                },
                cancel: function () {
                    $.alert('Canceled!');
                }
            }
        });
      });  
   
});




$(document).ready(function(){

    /* Add KML Popup Script */
    $(document).on('click',".mapPopClass",function(e){
        e.preventDefault();
        $(".add_ShowPopupDiv").show();
        var title = $(this).attr('title');
        $(".header").html(title);
    });


    /* View Cases Details Popup Script */
    $(document).on('click',".viewCasesLink",function(e){
        e.preventDefault();
        $(".viewCaseDetails_popupDiv").show();
    });


    /* View Cases Details Inner Popup Script */
    $(document).on('click',".viewCasesInnerPop",function(e){
        e.preventDefault();
        $(".viewCaseDetailsInner_popupDiv").show();
    });

    /* View Entity Popup Script */
    $(document).on('click',".viewEntityPop",function(e){
        e.preventDefault();
        $(".viewEntity_popupDiv").show();
    });

    /* View Entity Popup Script */
    $(document).on('click',".selectIconPop",function(e){
        e.preventDefault();
        $(".selectIcon_popupDiv").show();
    });

    /* View Export Type Popup Script */
    $(document).on('click',".selectExportPop",function(e){
        e.preventDefault();
        $(".viewExportType_popupDiv").show();
    });

    /* View Export Type Popup Script */
    $(document).on('click',".deleteIconsPop",function(e){
        e.preventDefault();
        $(".deleteIcons_popupDiv").show();
    });


    $(".closeMapPop").on('click',function(e){
        e.preventDefault();
        //$(".add_ShowPopupDiv").hide();
        var curdiv = '#'+$(this).parent().attr('id');
        console.log(curdiv);
        $(curdiv).hide();
    })    
});

$( function() {
    $( ".showPopupViewDesign" ).draggable({ handle: "div.header" });
    $( "div.showPopupViewDesign" ).draggable({ containment: 'window' });
});



/* Draggable Scripts Popup */
$( function() {
    $( "#ela_covid_tracker_wrap" ).draggable({ handle: "div.sideNav-covid-head" });
    $( "div.ela__covid_tracker_flyout" ).draggable({ containment: 'window' });
} );

jQuery(document).ready(function(){
    
    jQuery(".ela__covid_tracker_panel").hide();
    //jQuery("#panel_casemanager").show();
    jQuery(".ela__sideNav_nav_flyout").hide();
    var wrapperHeight = jQuery( window ).innerHeight()
    jQuery(".ela__covid_tracker_flyout").css('min-height',wrapperHeight);
    jQuery(".ela__covid_tracker_panel").css('min-height',wrapperHeight);
    
    jQuery(".ela__actionPanel li a").on('click',function(e){
        e.preventDefault();
        jQuery(".ela__actionPanel li").removeClass('active');
        jQuery(this).parent().addClass('active');
        jQuery(".ela__covid_tracker_flyout").show();
        var ids = jQuery(this).attr('class');
        jQuery(".ela__covid_tracker_panel").hide();
        jQuery("#"+ids).show();
    })
    jQuery(".closeBtn").on('click',function(e){
        e.preventDefault();
        jQuery(".ela__covid_tracker_flyout").hide();
    })

});


$( ".covid-toggleHead" ).click(function() {
   $(this).parent().find( ".covid-toggleContent" ).slideToggle();
   $(this).parent().toggleClass('showhideFilter');
   $(this).toggleClass('collapeHead');
});


$('.trackerToggleNav').on('click', function(){
    $('.covid-toggleContent').toggleClass('extandHeight');
});



$(document).ready(function() {
    $(".covid_export_Option").click(function() {
        $(".covid-ExportShow").toggle();
    });

    $(".covid_filter_Option").click(function() {
        $(".covid-FilterShow").toggle();
    });

    $(".covid_cases_export_Option").click(function() {
        $(".covid-cases-ExportShow").toggle();
    });
    
    $(".covid_cases_filter_Option").click(function() {
        $(".covid-cases-FilterShow").toggle();
    });
});


$(document).ready(function(){
    
    $(".fullScreenCases").click(function(){
        $("#casesFullScreen").addClass("casesFullDiv");
    });
    
});


var elem = document.getElementById("casesFullScreen");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  } 
}

if (document.addEventListener) {
 document.addEventListener('fullscreenchange', exitHandler, false);
 document.addEventListener('mozfullscreenchange', exitHandler, false);
 document.addEventListener('MSFullscreenChange', exitHandler, false);
 document.addEventListener('webkitfullscreenchange', exitHandler, false);
}

function exitHandler() {
 if ((!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement)) {
    $("#casesFullScreen").removeClass("casesFullDiv");
  // Run code on exit
 }
}


/**********************************************
        Debriefing Form All Scripts Here
***********************************************/

$(function (){
    $("#ela_deb_form_wizard").steps({
        headerTag: ".stepDivHead",
        bodyTag: ".ela_debFormStep_Container",
        transitionEffect: "fade"
    });
    
});
$(document).on('click',".btncls",function(){
    var ids = $(this).attr('data-title');
    
    $(this).siblings().removeClass('active');   
    $(this).addClass('active');
    if($(this).val() == 'Yes') {
        
        $("#"+ids).show();
    }else {
        $("#"+ids).hide();
    }  
    
    
});

function ShowHideDiv(btnPassport) {
    
    var dvPassport = document.getElementById("CI_ShowHide_1");
    dvPassport.style.display = btnPassport.value == "Yes" ? "block" : "none";
}
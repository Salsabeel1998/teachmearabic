var DatatablesBasicBasic={init:function(){var e;(e=$(".invoices-table")).DataTable({responsive:!0,dom:
    "<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 'lp>>",
    lengthMenu:[5,10,25,50],pageLength:10,language:{lengthMenu:"Display _MENU_"},order:[[1,"desc"]],
    columnDefs:[{targets:0,width:"200px",className:"dt-right"},
    {targets:-1,title:"  ",width:"200px",orderable:!1,render:function(e,a,t,n){return'\n<a href="invoice-details.html" class="btn btn-lg btn-invoiceDetails">تفاصيل</a>\n <button class="btn-downloadPDF"><img src="assets/main/img/pdf.svg" class="img-fluid" width="30"/></button>'}},
    {targets:0,render:function(e,a,t,n){var s={1:{title:"Pending",class:"m-badge--brand"},
    2:{title:"Delivered",class:" m-badge--metal"},
    3:{title:"Canceled",class:" m-badge--primary"},
    4:{title:"Success",class:" m-badge--success"},
    5:{title:"Info",class:" m-badge--info"},6:{title:"Danger",class:" m-badge--danger"},7:{title:"Warning",class:" m-badge--warninvar DatatablesBasicBasic={init:function(){var e;(e=$(".invoices-table")).DataTable({responsive:!0,dom:
    "<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 'lp>>",
    lengthMenu:[5,10,25,50],pageLength:10,language:{lengthMenu:"Display _MENU_"},order:[[1,"desc"]],
    columnDefs:[{targets:0,width:"200px",className:"dt-right"},
    {targets:-1,title:"  ",width:"200px",orderable:!1,render:function(e,a,t,n){return'\n<a href="invoice-details.html" class="btn btn-lg btn-invoiceDetails">تفاصيل</a>\n <button class="btn-downloadPDF"><img src="assets/main/img/pdf.svg" class="img-fluid" width="30"/></button>'}},
    {targets:0,render:function(e,a,t,n){var s={1:{title:"Pending",class:"m-badge--brand"},
    2:{title:"Delivered",class:" m-badge--metal"},
    3:{title:"Canceled",class:" m-badge--primary"},
    4:{title:"Success",class:" m-badge--success"},
    5:{title:"Info",class:" m-badge--info"},6:{title:"Danger",class:" m-badge--danger"},7:{title:"Warning",class:" m-badge--warning"}};return void 0===s[e]?e:'<span class="m-badge '+s[e].class+' m-badge--wide">'+s[e].title+"</span>"}},{targets:4,render:function(e,a,t,n){var s={1:{title:"Online",state:"danger"},2:{title:"Retail",state:"primary"},3:{title:"Direct",state:"accent"}};return void 0===s[e]?e:'<span class="m-badge m-badge--'+s[e].state+' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-'+s[e].state+'">'+s[e].title+"</span>"}}]}),e.on("change",".m-group-checkable",function(){var e=$(this).closest("table").find("td:first-child .m-checkable"),a=$(this).is(":checked");$(e).each(function(){a?($(this).prop("checked",!0),$(this).closest("tr").addClass("active")):($(this).prop("checked",!1),$(this).closest("tr").removeClass("active"))})}),e.on("change","tbody tr .m-checkbox",function(){$(this).parents("tr").toggleClass("active")})}};jQuery(document).ready(function(){DatatablesBasicBasic.init()});
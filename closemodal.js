/*work to modal close script*/
<script>
$(document).on('af_complete', function(event,res) {
  if(res.success) $('.close').click();
});
</script>
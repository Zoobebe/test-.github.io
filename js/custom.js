
     $(document).ready(function() {
      function updateButtonText() {
        var allCollapsed = $('.collapse.show').length === 0;
        $('#collapseBtn').text(allCollapsed ? 'Expand All' : 'Collapse All');
      }
    
      // Expand or collapse all sections on button click
      $('#collapseBtn').click(function() {
        var allCollapsed = $('#accordion .collapse.show').length === 0;
    
        if (allCollapsed) {
          // If all collapsed, expand all
          $('#accordion .collapse').collapse('show');
        } else {
          // If any open, collapse all
          $('#accordion .collapse').collapse('hide');
        }
    
        // Update button text after the toggle
        updateButtonText();
      });
    
      // Update button text on accordion state change
      $('#accordion').on('hidden.bs.collapse shown.bs.collapse', function() {
        updateButtonText();
      });
    });

(function ($) {
    $(document).ready(function () {
        var darkModeToggle = $('#darkModeToggle');
        var moonIcon = $('#moonIcon');
        var sunIcon = $('#sunIcon');
        var body = $('body');

        // Function to set the theme
        function setTheme(theme) {
            if (theme === 'dark') {
                body.addClass('dark-mode');
                moonIcon.hide();
                sunIcon.show();
                localStorage.setItem('theme', 'dark');
            } else {
                body.removeClass('dark-mode');
                sunIcon.hide();
                moonIcon.show();
                localStorage.setItem('theme', 'light');
            }
        }

        // Check for saved theme in localStorage
        var savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            // Default to light theme
            setTheme('light');
        }

        // Toggle theme on button click
        darkModeToggle.on('click', function () {
            if (body.hasClass('dark-mode')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    });
})(jQuery);

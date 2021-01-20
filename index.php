<!DOCTYPE html>
<html lang="en">
<head>
    <title>Sniper Elite 4 Interactive Map</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <meta property="og:title" content="Sniper Elite 4 Interactive Map"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="http://sniperelite4maps.de"/>
    <meta property="og:image" content="https://sniperelite4maps.de/files/images/preview.jpg"/>
    <meta property="og:description"
          content="Interactive map with all Collectibles like Last Letters and Stone Eagles. The Map also has a progress tracker, just rightclick (long press one mobile) to mark them as collected"/>
    <meta name="description"
          content="Sniper Elite 4 interactive map. All Collectibles: Last Letters, Letters From Home, Letters To Home, Duty Roster, Sniper Reports, Miscellaneous Documents and Deadeye Targets"/>
    <meta name="keywords"
          content="Sniper Elite 4, Sniper Elite 4 map, Sniper Elite 4 interactive map, Mission 04, Abrunza Monastery, Deadeye Targets, Collectibles, Last Letters, Letters From Home, Letters To Home, Duty Roster, Sniper Reports, Miscellaneous Documents "/>
    <link type="text/css" rel="stylesheet" href="/files/styles/leaflet.css"/>
    <link type="text/css" rel="stylesheet" href="/files/styles/main.min.css"/>
    <link type="text/css" rel="stylesheet" href="/files/styles/font-awesome.min.css"/>
    <!--link rel="shortcut icon" href="/files/images/favicon.ico" /-->
    <meta name="theme-color" content="#ffffff"/>
    <script type="text/javascript" src="/files/scripts/vendor.bundle.js"></script>
</head>
<body>
<div id="sidebar">
    <div id="sidebar-wrap">
        <a href="../" data-i18n="[title]sidebar.returnToMapSelection" title="Return to Map Selection">
            <div id="logo"></div>
        </a>
        <ul class="key">
            <li><i class="letter-from-home"></i>
                <div data-i18n="sidebar.letter-from-home">Letters from Home</div>
            </li>
            <li><i class="letter-to-home"></i>
                <div data-i18n="sidebar.letter-to-home">Letters to Home</div>
            </li>
            <li><i class="last-letter"></i>
                <div data-i18n="sidebar.last-letter">Last Letters</div>
            </li>
            <li><i class="misc-document"></i>
                <div data-i18n="sidebar.misc-document">Misc. Documents</div>
            </li>
            <li><i class="duty-roster"></i>
                <div data-i18n="sidebar.duty-roster">Duty Rosters</div>
            </li>
            <li><i class="sniper-report"></i>
                <div data-i18n="sidebar.sniper-report">Sniper Reports</div>
            </li>
            <!-- second column -->
            <li><i class="deadeye-target"></i>
                <div data-i18n="sidebar.deadeye-target">DeadEye</div>
            </li>
            <li><i class="generator"></i>
                <div data-i18n="sidebar.generator">Generator</div>
            </li>
            <li><i class="objective-primary"></i>
                <div data-i18n="sidebar.objective-primary">Primary Objectives</div>
            </li>
            <li><i class="objective-optional"></i>
                <div data-i18n="sidebar.objective-optional">Optional Objectives</div>
            </li>
            <li><i class="objective-exit"></i>
                <div data-i18n="sidebar.objective-exit">Mission Exits</div>
            </li>
            <li class="none"></li>
        </ul>
        <ul class="key controls">
            <li id="show-all">
                <i class="fa fa-eye"></i>
                <div data-i18n="controls.show-all">Show All</div>
            </li>
            <li id="hide-all">
                <i class="fa fa-eye-slash"></i>
                <div data-i18n="controls.hide-all">Hide All</div>
            </li>
            <li id="show-counts">
                <i class="fa fa-check-square"></i>
                <div data-i18n="controls.show-counts">Show Counts</div>
            </li>
            <li id="hide-counts">
                <i class="fa fa-square"></i>
                <div data-i18n="controls.hide-counts">Hide Counts</div>
            </li>
            <li id="reset-tracking">
                <i class="fa fa-eraser"></i>
                <div data-i18n="controls.reset-markers">Reset Markers</div>
            </li>
            <li>
                <a href="https://github.com/lordfiSh/sniperelite4maps" target="_blank">
                    <i class="fa fa-info-circle"></i>
                    <div data-i18n="controls.features">Features &amp; Help</div>
                </a>
            </li>
            <li class="credits">
                <i class="fa fa-copyright"></i>
                <div data-i18n="controls.credits">Credits</div>
            </li>
            <li></li>
        </ul>
        <div id="note">
            <span id="note-msg">
				If you find any issues, please let us know on
                <a href="https://github.com/lordfiSh/sniperelite4maps/issues">GitHub</a>.
            </span>
        </div>
        <div id="lang">
            <div id="lang-switcher"></div>
        </div>
    </div>
    <div id="copyright">
        <!--TODO-->
    </div>
</div>
<div id="sidebar-border"></div>
<div id="hide-sidebar"></div>
<div id="warn" data-i18n="misc.portraitWarn"></div>
<div id="info-wrap">
    <div id="info-fade-intro"></div>
    <div id="info"></div>
    <div id="info-fade-outro"></div>
</div>
<div id="map"></div>
<script type="text/javascript" src="/files/scripts/lang-global.js"></script>
<script type="text/javascript" src="/files/scripts/shared.js"></script>
</body>
</html>

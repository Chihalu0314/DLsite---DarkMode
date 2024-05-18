// darkmode.js
chrome.storage.local.get(['darkMode'], function (result) {
    var style = document.getElementById('dark-mode-style');

    if (result.darkMode) {
        if (!style) {
            style = document.createElement('style');
            style.id = 'dark-mode-style';
            document.head.appendChild(style);
        }

        style.textContent = `
      body {
          background-color: #2b2b2b;
        }
        
        p {
          color: #fff;
        }

        span {
            color: #fff;
          }

        dt {
            color: #fff;
        }

        dd {
            color: #fff;
        }
        
        h1#work_name {
            color: #00ccff; 
          }
        
          div.title_01 h2, div.title_01 h3 {
            color: #00ccff; 
          }
        
          h3 {
            color: #00ccff; 
          }
        
          h4 {
            color: #00ccff; 
          }
        
          h5 {
            color: #00ccff; 
          }
        
          h6 {
            color: #00ccff; 
          }
        
        a {
          color: #e9b1ff;
        }

        a:visited, a:link {
            color: #e9b1ff; 
          }
        
        li {
          color: #90ee90; 
        }

        th {
            color: #fff;
        }

        td {
            color: #fff;
        }

        table#work_maker span.maker_name a:visited, table#work_maker span.maker_name a:hover {
            color: #e9b1ff;
        }
        
      `;
    } else {
        if (style) {
            style.remove();
        }
    }
});

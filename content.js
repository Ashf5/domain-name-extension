
document.body.addEventListener('click', handleLinkClick);


// handler for whenever a link is clicked
function handleLinkClick(e) {
    // If there's any popups, remove them
    
    const target = e.target.closest('a');
    if (!target) return;

    let link = target.href;
    if (!link) return;


    // send to make sure it's not just a redirect link.
    url = getLink(link);

    e.preventDefault();
    e.stopPropagation();


    // get the domain name
    const hostname = url.hostname;
    const parsed = psl.parse(hostname);
    const domain = parsed.domain || hostname;
    
    // Check if the link pressed was the one we made to check if valid link
    if (!(domain === 'ssltrust.co.uk')) {
        clearPopup();
        createPopUp(domain, target, e);
    }else {
        window.open(link, '_blank')
    }
    
}


// gets link and Checks if this is a redirect link. Has the basic redirects
function getLink(link) {
    const url = new URL(link);
    const candidates = ['q', 'url', 'u'];
    for (const key of candidates) {
        const value = url.searchParams.get(key);
        if (value && value.startsWith('http')) {
            try {
                return new URL(decodeURIComponent(value));
            } catch {
                // will return original url
            }
        }
    }
    return url;
}


// Creates a popup and appends to the dom
function createPopUp(domain, link, event) {
    let div = document.createElement('div');
    div.classList.add('popup-container');
    div.innerHTML = `<h3>Domain Name: ${domain}</h3> 
    <a href=https://www.ssltrust.co.uk/ssl-tools/website-security-check?domain=${domain} target='_blank'>Check Report</a><br>
    <button id='follow-button'>follow link</button>
    <button id='cancel-button'>never mind</button>`;


    div.style.position = 'absolute';
    div.style.zIndex = 1000;
    div.style.top = (window.scrollY + event.clientY) + 'px';
    div.style.left = (window.scrollX + event.clientX) + 'px';


    document.body.appendChild(div);

    // Ensure popup stays within viewport
    const rect = div.getBoundingClientRect();
    let newTop = window.scrollY + event.clientY;
    let newLeft = window.scrollX + event.clientX;

    // Adjust if off right edge
    if (rect.right > window.innerWidth) {
        newLeft = window.scrollX + window.innerWidth - rect.width - 10;
    }
    // Adjust if off bottom edge
    if (rect.bottom > window.innerHeight) {
        newTop = window.scrollY + window.innerHeight - rect.height - 10;
    }

    // Adjust if off left edge
    if (rect.left < 0) {
        newLeft = window.scrollX + 10;
    }
    // Adjust if off top edge
    if (rect.top < 0) {
        newTop = window.scrollY + 10;
    }

    div.style.top = newTop + 'px';
    div.style.left = newLeft + 'px';

    // create event listeners for the buttons and handle them
    document.querySelector('#follow-button').addEventListener('click', () => {
        // If was supposed to be in new tab, open in new tab
        let newTab = false;
        if (link.hasAttribute('target') && link.target === '_blank') {
            newTab = true;
        }
        if (newTab) {
            clearPopup();
            window.open(link.href, '_blank');
        }else {
            window.location.href = link.href;
        }
    });

    document.querySelector('#cancel-button').addEventListener('click', () => clearPopup());
}


// function to clear the popup 
function clearPopup() {
    let div = document.querySelectorAll('.popup-container');
    Array.from(div).forEach(item => item.remove());
}
/*
** Parcel does :-
** HMR => Hot Module Replacement 
    If we do any changes in file it automatically reloads the web page because of HMR which Parcel uses.
** How does HMR know which file has updated?? 
** File Watcher => File Watcher Algorithm
** Bundling
** Minifying
** Can use secure http => HTTPS ---- npx parcel index.html --https
** Consistent Hashing Algorithm => For Caching 
** Zero Configuration
** Transitive Dependencies => One package is dependent on another package that package is dependent on another one and so on.
** Tree Shaking - Remove unwanted code
*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = document.createElement('h2')
heading.innerHTML = "Heading1"

const root = document.getElementById('root')
root.appendChild(heading)

// React over-rides the other heading

const heading2 = React.createElement('h1', { id: 'heading1', key: 'h1' }, 'Heading 2')
const heading3 = React.createElement('h2', { id: 'heading2', key: 'h2' }, 'Heading 3')


// Using JSX

const heading4 = (
    <div key='div'>
        <h3 id="header" key='h3'>Heading4</h3>
        <h4 id="header" key='h4'>Heading5</h4>
    </div>
)

console.log(heading4)

const container = React.createElement('div', { className: 'container' }, [heading2, heading3, heading4])

const reactRoot = ReactDOM.createRoot(document.getElementById('root'))

reactRoot.render(container)


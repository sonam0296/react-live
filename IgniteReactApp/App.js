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

// React.createElement =====>> converted to ======>>> Object =====>>> HTML (Dom)

const heading2 = React.createElement('h1', { id: 'heading1', key: 'h1' }, 'Heading 2')
const heading3 = React.createElement('h2', { id: 'heading2', key: 'h2' }, 'Heading 3')


// Using JSX

// JSX ====>>> converted =====>>> React.createElement =====>> converted to ======>>> Object =====>>> HTML (Dom)
// This happens because of Babel as it converts JSX to React.createElement and then to Object and then to HTML

// heading4 =>>> React Element
const heading4 = (
    <h3 id="header" key='h'>Heading</h3>
)

// the above code snippet is JSX expression as the JSX element is assigned to a constant varibale

console.log(heading4)

// Components 
//  -Functional Component =====>>> Functional Component is a normal function

const Title = () => (
    <h3 id="title" key='title'>Title</h3>
)

const HeaderComponent = () => {
    return (
        <div key='div'>
            {heading4}
            {/* Title() ==== It can be written as <Title/> */}
            {/* Title() or <Title/> ===>>> It is called Component Composition i.e the name for passing components as props to other components, thus creating new components with other components  */}
            {Title()} 
            <h3 id="header" key='h3'>Heading4</h3>
            <h4 id="header" key='h4'>Heading5</h4>
        </div>
    )
}

const container = React.createElement('div', { className: 'container' }, [heading2, heading3, heading4])

const reactRoot = ReactDOM.createRoot(document.getElementById('root'))

reactRoot.render(<HeaderComponent/>)


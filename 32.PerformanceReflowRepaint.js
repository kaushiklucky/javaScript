
// code 1
const t1 = performance.now();

for(let i=1; i<=100; i++){
    let para = document.createElement("p");
    para.textContent = "This is para " + i;
    document.body.appendChild(para);
}

const t2 = performance.now();

console.log("total time by code 1: " + (t2-t1));

// Each time you do document.body.appendChild(para) → the browser updates the live DOM.
// This can cause reflow + repaint again and again (up to 100 times).
// That means layout recalculation is happening for every paragraph individually.



// code 2

const t3 = performance.now();

let myDiv = document.createElement("div");

for(let i=1; i<=100; i++){
    let para = document.createElement("p");
    para.textContent = "This is para " + i;
    myDiv.appendChild(para);
}

document.body.appendChild(myDiv);

const t4 = performance.now();

console.log("total time by code 2: " + (t4-t3));

// Here you build the whole structure inside memory (myDiv).
// Browser does not touch the live DOM during the loop.
// Only one reflow + repaint happens at the end when you finally append myDiv to document.body.

// Code 1 = 100 × reflow/repaint (expensive).
// Code 2 = 1 × reflow/repaint (cheap).
// 👉 Fewer layout recalculations = better performance.


const t5 = performance.now();

let fragment = document.createDocumentFragment(); 

for (let i = 1; i <= 100; i++) {
    let para = document.createElement("p");
    para.textContent = "This is para " + i;
    fragment.appendChild(para); // no reflow and no repaint here.
}

document.body.appendChild(fragment); // takes 1 reflow and 1 repaint

const t6 = performance.now();

console.log("total time by code 3: " + (t6 - t5));

//💡 Pro tip: In real projects, devs often use DocumentFragment instead of div to batch DOM changes even more efficiently.


/*
Let’s compare the three approaches directly:

⚡ Code 1: Append each element directly
Process: Creates <p> and appends it immediately to document.body.
Effect: Causes 100 reflows + repaints (expensive).
Performance: ❌ Worst — should be avoided for bulk insertions.

⚡ Code 2: Append inside a <div>, then append once
Process: Creates a <div>, fills it with 100 <p>s in memory, then appends the whole div once.
Effect: Only 1 reflow + repaint.
Performance: ✔️ Much better.

⚡ Code 3: Use DocumentFragment
Process: Creates a DocumentFragment (lighter than <div>), appends 100 <p>s into it, then appends the fragment once to the body.
Effect: Still only 1 reflow + repaint, but intermediate work is done in a super lightweight container.
Performance: ✅ Best (most optimized).

🏆 Best Choice
👉 Code 3 (DocumentFragment) is the best because:
No extra wrapper element like <div>.
Memory-efficient & fastest for bulk DOM updates.
Professional devs use this in large apps (chat messages, lists, tables, etc.).

⚡ So final order:
Code 3 > Code 2 > Code 1
*/




// reflow and repaint

/*
📌 Reflow (Layout):
Main Points:
Reflow = layout recalculation.
Triggered when an element’s size, position, or structure changes.
Expensive operation because browser must recalculate positions of affected elements (sometimes the entire page).
After reflow, the browser often also needs to repaint.

Causes of Reflow:
Adding/removing DOM elements.
Changing size-related CSS: width, height, margin, padding, border, font-size, line-height.
Changing display/visibility properties: display: none, position, float.
Resizing the browser window.
Changing content (e.g. innerText/innerHTML).

📌 Repaint (Redraw):
Main Points:
Repaint = visual update only, no geometry change.
Triggered when styles change that don’t affect layout, only appearance.
Cheaper than reflow because only pixels are updated.

Causes of Repaint:
Changing color, background, outline, box-shadow.
Changing visibility: hidden (but not display: none).
Changing text-decoration, border-color.

📌 Difference Summary (Quick Lines):
Reflow = Layout recalculation (heavy).
Repaint = Visual update only (lighter).
Reflow usually leads to repaint, but repaint never causes reflow.

📌 Analogy:
Reflow = Moving furniture → everything must be rearranged.
Repaint = Painting furniture → only the look changes.

📌 Best Practices to Reduce Reflow/Repaint:
Avoid changing styles too often in JavaScript.
Use CSS classes instead of repeatedly setting inline styles.
Batch DOM changes (use documentFragment, cloneNode, etc.).
Avoid layout thrashing (don’t read + write layout repeatedly in the same cycle).
Use transform and opacity for animations → they don’t trigger reflow.

✅ In short:
Reflow = layout work (expensive)
Repaint = pixel work (cheaper)

*/
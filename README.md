Why do we use TypeScript?
coretype

<ul>
<li>number : 1, 5.3, -10</li><p>All numbers. no differentiation between integer or floats</p>
<li>string: "hi", 'hi', `hi`</li><p>All text values</p>
<li>boolean: true, flase</li>
<li>Object: {age: 30}</li><p>Any JavaScript object, more specific types are possible</p>
<li>Array: ["hi", "there", 1, true]</li><p>Any JavaScript array, type can be flexible or strict</p>
<li>(Only in TypeScript)Tuple: [1,2]</li><p>Added by TypeScript: Fixed-length array</p>
<li>(Only in TypeScript)Enum: enum{NEW, OLD}</li><p>Added by TypeScript: Automatically enumerated global constant identifiers</p>
<li>ANY : *</li><p>Any kind of value, no specific type assignment</p>
<li>void : let unusable: void = undefined</li><p>it doesn't return but undefined, null. If function didn't return anything then it's type of void</p>
<li>unknown</li><p>you can store anyvalue without error. but it's not same as any. unknown is abit more restrictive than any.</p>

</ul>
<br/>
How different are TypeScript and JavaScript?
<ul>
<li>JavaScript uses "dynamic types", TypeScript uses "static types"</li>
</ul>

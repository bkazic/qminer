var _vec = {
    normalize: function () {
        /// <signature>
        /// <summary> normalizes the vector `vec` (inplace operation). Implemented for dense float vectors.</summary>
        /// <returns value =""/>
        /// </signature>

    },

    sort: function () {
        /// <signature>
        /// <summary> `vec2` is a sorted copy of `vec`. `asc=true` sorts in ascending order (equivalent `sort()`), `asc`=false sorts in descending order</summary>
        /// <param name="_asc" value="_asc">param</param>
        /// <returns value ="_vec2"/>
        /// </signature>

    },

    outer: function () {
        /// <signature>
        /// <summary> the dense matrix `mat` is a rank-1 matrix obtained by multiplying `vec * vec2^T`. Implemented for dense float vectors.</summary>
        /// <param name="_vec2" value="_vec2">param</param>
        /// <returns value ="_mat"/>
        /// </signature>

    },

    sortPerm: function () {
        /// <signature>
        /// <summary> returns a sorted copy of the vector in `sortRes.vec` and the permutation `sortRes.perm`. `asc=true` sorts in ascending order (equivalent `sortPerm()`), `asc`=false sorts in descending order.</summary>
        /// <param name="_asc" value="_asc">param</param>
        /// <returns value ="_sortRes"/>
        /// </signature>

    },

    getMaxIdx: function () {
        /// <signature>
        /// <summary> returns the integer index `idx` of the maximal element in vector `vec`</summary>
        /// <returns value ="_idx"/>
        /// </signature>

    },

    pushV: function () {
        /// <signature>
        /// <summary> append vector `vec2` to vector `vec`.</summary>
        /// <param name="_vec2" value="_vec2">param</param>
        /// <returns value =""/>
        /// </signature>

    },

    diag: function () {
        /// <signature>
        /// <summary> `mat` is a diagonal dense matrix whose diagonal equals `vec`. Implemented for dense float vectors.</summary>
        /// <returns value ="_mat"/>
        /// </signature>

    },

    sum: function () {
        /// <signature>
        /// <summary> return `num`: the sum of elements of vector `vec`</summary>
        /// <returns value ="_num"/>
        /// </signature>

    },

    push: function () {
        /// <signature>
        /// <summary> append value `num` to vector `vec`. Returns `len` - the length  of the modified array</summary>
        /// <param name="_num" value="_num">param</param>
        /// <returns value ="_len"/>
        /// </signature>

    },

    put: function () {
        /// <signature>
        /// <summary> set value of vector `vec` at index `idx` to `num` (0-based indexing)</summary>
        /// <param name="_idx" value="_idx">param</param>
        /// <param name="_num" value="_num">param</param>
        /// <returns value =""/>
        /// </signature>

    },

    sparse: function () {
        /// <signature>
        /// <summary> `spVec` is a sparse vector representation of dense vector `vec`. Implemented for dense float vectors.</summary>
        /// <returns value ="_spVec"/>
        /// </signature>

    },

    print: function () {
        /// <signature>
        /// <summary> print vector in console</summary>
        /// <returns value =""/>
        /// </signature>

    },

    /// <field value = "_len"> integer `len` is the length of vector `vec`</field>
    length: _len,
    plus: function () {
        /// <signature>
        /// <summary>`vec3` is the sum of vectors `vec` and `vec2`. Implemented for dense float vectors.</summary>
        /// <param name="_vec2" value="_vec2">param</param>
        /// <returns value ="_vec3"/>
        /// </signature>

    },

    at: function () {
        /// <signature>
        /// <summary> gets the value `num` of vector `vec` at index `idx`  (0-based indexing)</summary>
        /// <param name="_idx" value="_idx">param</param>
        /// <returns value ="_num"/>
        /// </signature>

    },

    spDiag: function () {
        /// <signature>
        /// <summary> `spMat` is a diagonal sparse matrix whose diagonal equals `vec`. Implemented for dense float vectors.</summary>
        /// <returns value ="_spMat"/>
        /// </signature>

    },

    unshift: function () {
        /// <signature>
        /// <summary> insert value `num` to the begining of vector `vec`. Returns the length of the modified array.</summary>
        /// <param name="_num" value="_num">param</param>
        /// <returns value ="_len"/>
        /// </signature>

    },

    multiply: function () {
        /// <signature>
        /// <summary>`vec2` is a vector obtained by multiplying vector `vec` with a scalar (number) `num`. Implemented for dense float vectors.</summary>
        /// <param name="_num" value="_num">param</param>
        /// <returns value ="_vec2"/>
        /// </signature>

    },

    minus: function () {
        /// <signature>
        /// <summary>`vec3` is the difference of vectors `vec` and `vec2`. Implemented for dense float vectors.</summary>
        /// <param name="_vec2" value="_vec2">param</param>
        /// <returns value ="_vec3"/>
        /// </signature>

    },

    norm: function () {
        /// <signature>
        /// <summary> `num` is the Euclidean norm of `vec`. Implemented for dense float vectors.</summary>
        /// <returns value ="_num"/>
        /// </signature>

    },

    inner: function () {
        /// <signature>
        /// <summary> `num` is the standard dot product between vectors `vec` and `vec2`. Implemented for dense float vectors.</summary>
        /// <param name="_vec2" value="_vec2">param</param>
        /// <returns value ="_num"/>
        /// </signature>

    },

}

var _intVec = {
    sort: function () {
        /// <signature>
        /// <summary> integer vector `intVec2` is a sorted copy of integer vector `intVec`. `asc=true` sorts in ascending order (equivalent `sort()`), `asc`=false sorts in descending order</summary>
        /// <param name="_asc" value="_asc">param</param>
        /// <returns value ="_intVec2"/>
        /// </signature>

    },

    getMaxIdx: function () {
        /// <signature>
        /// <summary> returns the integer index `idx` of the maximal element in integer vector `vec`</summary>
        /// <returns value ="_idx"/>
        /// </signature>

    },

    pushV: function () {
        /// <signature>
        /// <summary> append integer vector `intVec2` to integer vector `intVec`.</summary>
        /// <param name="_intVec2" value="_intVec2">param</param>
        /// <returns value =""/>
        /// </signature>

    },

    unshift: function () {
        /// <signature>
        /// <summary> insert value `num` to the begining of integer vector `intVec`. Returns the length of the modified array.</summary>
        /// <param name="_num" value="_num">param</param>
        /// <returns value ="_len"/>
        /// </signature>

    },

    sum: function () {
        /// <signature>
        /// <summary> return `num`: the sum of elements of integer vector `intVec`</summary>
        /// <returns value ="_num"/>
        /// </signature>

    },

    put: function () {
        /// <signature>
        /// <summary> set value of integer vector `intVec` at index `idx` to `num` (0-based indexing)</summary>
        /// <param name="_idx" value="_idx">param</param>
        /// <param name="_num" value="_num">param</param>
        /// <returns value =""/>
        /// </signature>

    },

    push: function () {
        /// <signature>
        /// <summary> append value `num` to integer vector `intVec`. Returns `len` - the length  of the modified array</summary>
        /// <param name="_num" value="_num">param</param>
        /// <returns value ="_len"/>
        /// </signature>

    },

    /// <field value = "_len"> integer `len` is the length of integer vector `vec`</field>
    length: _len,
    at: function () {
        /// <signature>
        /// <summary> gets the value `num` of integer vector `intVec` at index `idx`  (0-based indexing)</summary>
        /// <param name="_idx" value="_idx">param</param>
        /// <returns value ="_num"/>
        /// </signature>

    },

    print: function () {
        /// <signature>
        /// <summary> print integer vector in console</summary>
        /// <returns value =""/>
        /// </signature>

    },

}

var la = {
    newIntVec: function () {
        /// <signature>
        /// <summary> generate an empty float vector</summary>
        /// <returns value ="_intVec"/>
        /// </signature>

        /// <signature>
        /// <summary> copy a javascript int array `arr`</summary>
        /// <param name="_arr" value="_arr">param</param>
        /// <returns value ="_intVec"/>
        /// </signature>

        /// <signature>
        /// <summary> clone an int vector `vec2`</summary>
        /// <param name="_vec2" value="_vec2">param</param>
        /// <returns value ="_intVec"/>
        /// </signature>

    },

    newMat: function () {
        /// <signature>
        /// <summary> generates a 0x0 matrix</summary>
        /// <returns value ="_mat"/>
        /// </signature>

        /// <signature>
        /// <summary> generates a matrix from a javascript array `nestedArr`, whose elements are arrays of numbers which correspond to matrix rows (row-major dense matrix)</summary>
        /// <param name="_nestedArr" value="_nestedArr">param</param>
        /// <returns value ="_mat"/>
        /// </signature>

        /// <signature>
        /// <summary> clones a dense matrix `mat2`</summary>
        /// <param name="_mat2" value="_mat2">param</param>
        /// <returns value ="_mat"/>
        /// </signature>

    },

    newSpVec: function () {
        /// <signature>
        /// <summary> creates an empty sparse vector `vec`, where `len` is an optional (-1 by default) integer parameter that sets the dimension</summary>
        /// <param name="_len" value="_len">param</param>
        /// <returns value ="_vec"/>
        /// </signature>

        /// <signature>
        /// <summary> creats a sparse vector `vec` from a javascript array `nestedArr`, whose elements are javascript arrays with two elements (integer row index and double value). `len` is optional and sets the dimension</summary>
        /// <param name="_nestedArr" value="_nestedArr">param</param>
        /// <param name="_len" value="_len">param</param>
        /// <returns value ="_vec"/>
        /// </signature>

    },

    newVec: function () {
        /// <signature>
        /// <summary> generate an empty float vector</summary>
        /// <returns value ="_vec"/>
        /// </signature>

        /// <signature>
        /// <summary> copy a javascript number array `arr`</summary>
        /// <param name="_arr" value="_arr">param</param>
        /// <returns value ="_vec"/>
        /// </signature>

        /// <signature>
        /// <summary> clone a float vector `vec2`</summary>
        /// <param name="_vec2" value="_vec2">param</param>
        /// <returns value ="_vec"/>
        /// </signature>

    },

    newSpMat: function () {
        /// <signature>
        /// <summary> creates an empty sparse matrix `mat`</summary>
        /// <returns value ="_mat"/>
        /// </signature>

        /// <signature>
        /// <summary> creates an sparse matrix based on two int vectors `rowIdxVec` (row indices) and `colIdxVec` (column indices) and float vector of values `valVec`</summary>
        /// <param name="_rowIdxVec" value="_rowIdxVec">param</param>
        /// <param name="_colIdxVec" value="_colIdxVec">param</param>
        /// <param name="_valVec" value="_valVec">param</param>
        /// <returns value ="_mat"/>
        /// </signature>

        /// <signature>
        /// <summary> creates an sparse matrix with `rows` rows (optional parameter), where `doubleNestedArr` is a javascript array of arrays that correspond to sparse matrix columns and each column is a javascript array of arrays corresponding to nonzero elements. Each element is an array of size 2, where the first number is an int (row index) and the second value is a number (value). Example: `mat = linalg.newSpMat([[[0, 1.1], [1, 2.2], [3, 3.3]], [[2, 1.2]]], { "rows": 4 });`</summary>
        /// <param name="_doubleNestedArr" value="_doubleNestedArr">param</param>
        /// <param name="_rows" value="_rows">param</param>
        /// <returns value ="_mat"/>
        /// </signature>

    },

}


// Manual override
// contains keys of variables that should not show in intellisense
intellisenseIgnore = {};
// creates global variables that can be seen in visual studio js file if this file is referenced
function _addIntellisenseVar(key, val, hideVar) {
    if (typeof hideVar == 'undefined')
        hideVar = true;
    if (hideVar) {
        intellisenseIgnore[key] = val;
    }
    eval(key + "=" + val);
}

// ignore suggest list! (all non global variables)
// locals (js)
_addIntellisenseVar("_idx", "1");
_addIntellisenseVar("_num", "1");
_addIntellisenseVar("_num2", "1");
_addIntellisenseVar("_len", "1");
_addIntellisenseVar("_cols", "1");
_addIntellisenseVar("_rows", "1");
_addIntellisenseVar("_k", "1");
_addIntellisenseVar("_arr", "[1]");
_addIntellisenseVar("_nestedArr", "[_arr]");
_addIntellisenseVar("_doubleNestedArr", "[_nestedArr]");
_addIntellisenseVar("_bool", "true");
_addIntellisenseVar("_asc", "true");

// other structures
_addIntellisenseVar("_sortRes", "{ vec: _vec, perm: _intVec }");
_addIntellisenseVar("_vecCtrParam", "{ vals: 1, mxvals: 1 }");
_addIntellisenseVar("_svdRes", "{ U: _mat, V: _mat, s: _vec }");
//// globals C++ (without _), do not hide intellisense
//_addIntellisenseVar("la", "{}", false); // linalg global
// special case
_addIntellisenseVar("_addIntellisenseVar", "_addIntellisenseVar"); // eval doesn't change _addIntellisenseVar, we just add the variable "_addIntellisenseVar" to ignore list
_addIntellisenseVar("intellisenseIgnore", "intellisenseIgnore"); // eval doesn't change intellisenseIgnore, we just add the variable "intellisenseIgnore" to ignore list

// locals (just hide, do not overwrite) (c++)
intellisenseIgnore["_vec"] = "{}";
intellisenseIgnore["_intVec"] = "{}";
intellisenseIgnore["_mat"] = "{}";

_vec[0] = 1; // vec is indexed and returns numbers
_intVec[0] = 1; // vec is indexed and returns numbers
_addIntellisenseVar("_vec2", "_vec");
_addIntellisenseVar("_vec3", "_vec");
_addIntellisenseVar("_valVec", "_vec");
_addIntellisenseVar("_intVec2", "_intVec");
_addIntellisenseVar("_rowIdxVec", "_intVec");
_addIntellisenseVar("_colIdxVec", "_intVec");
_addIntellisenseVar("_mat2", "_mat");


// implement ignore
intellisense.addEventListener('statementcompletion', function (event) {
    if (event.targetName === "this") return;
    event.items = event.items.filter(function (item) {
        return !intellisenseIgnore.hasOwnProperty(item.name);
    });
});


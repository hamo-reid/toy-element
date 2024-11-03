<template>
  <div style="display: flex;flex-direction: column; align-items: center">
    <hm-text>span</hm-text>
    <hm-text tag="p">This is a paragraph.</hm-text>
    <hm-text tag="b">Bold</hm-text>
    <hm-text tag="i">Italic</hm-text>
    <hm-text>
      This is
      <hm-text tag="sub" size="small">subscript</hm-text>
    </hm-text>
    <hm-text>
      This is
      <hm-text tag="sup" size="small">superscript</hm-text>
    </hm-text>
    <hm-text tag="ins">Inserted</hm-text>
    <hm-text tag="del">Deleted</hm-text>
    <hm-text tag="mark">Marked</hm-text>
  </div>
</template>
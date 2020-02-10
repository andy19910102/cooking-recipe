// 將每個li透過forEach迴圈取出
document.querySelectorAll('.ingredients>li').forEach(function(listItem){
  // 印出listItem
  // console.log('listItem:', listItem);
  // 為每個listItem綁定點擊事件
  listItem.addEventListener('click', function(){
    // 當listItem被點擊時
    // console.log('[click]')
    // console.log('this:', this);
    // 顯示出this可用的所有屬性
    // console.dir(this);
    // console.log('this.classList:', this.classList);
    // 將這個listItem的class中的'done'切換
    this.classList.toggle('done');
  });
});

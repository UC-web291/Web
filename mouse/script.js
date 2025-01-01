window.onload = function(){
    var box=this.document.getElementsByClassName("re")[0];
    var lik=box.getElementsByTagName("li");
    function fun(i,j){//转换图片函数，就是把透明度改了一下
      lik[i].style.opacity=1;
      lik[j].style.opacity=0;
      lik[i+5].style.backgroundColor="#ffffff";//改一下小图标
      lik[j+5].style.backgroundColor="#00000000"
    }
    fun(0,1);//初始化下
    var i =0;
    function auto(){//轮播循环函数
      if(++i>=5){
        i=0;
      }
      fun(i, (i === 0 ? 4 : i - 1)); // 处理当 i 为 0 时的情况
    }
    timer=this.setInterval(auto,2000);
    box.onmouseover = function () { //鼠标划上去，停止轮播
      console.log('good');
      clearInterval(timer);
    }
    box.onmouseout = function () { //鼠标划出，继续轮播
      timer = setInterval(auto, 2000); //调用定时器
    }
    var j =0;
    for(;j<5;j++){//点击小图标也可以转换图片
      lik[j+5].ind=j;
      lik[j+5].onclick=function(){
        fun(this.ind,i)
        i=this.ind;
      }
    }

        // 如果音频未被创建，创建音频元素
      if (!audioElement) {
          audioElement = new Audio('music/mouse.mp3');
          // audioElement.loop = true;  // 循环播放
      }
  
      // 根据 localStorage 中的状态来控制音频的播放
      if (getAudioState() === 'playing') {
          audioElement.play();
      } else {
          audioElement.pause();
      }
  
      // 监听音频播放结束事件
      audioElement.onended = function() {
          setAudioState('stopped');
      };
  
  }
  
  
    // 获取当前页面的 URL 路径
    const currentPage = window.location.pathname;

    // 根据页面路径为对应的导航项添加 'active' 类
    if (currentPage.includes('introduction.html')) {
        document.getElementById('intro-link').classList.add('active');
    } else if (currentPage.includes('movies.html')) {
        document.getElementById('movies-link').classList.add('active');
    } else if (currentPage.includes('photo.html')) {
        document.getElementById('photo-link').classList.add('active');
    } else if (currentPage.includes('message.html')) {
        document.getElementById('message-link').classList.add('active');
    }


// audio.js - 控制音频播放的脚本

let audioElement = null;
let isPlaying = false;

// 获取当前音频的播放状态
function getAudioState() {
    return localStorage.getItem('audioState') || 'stopped';  // 'playing' 或 'stopped'
}

// 设置音频的播放状态
function setAudioState(state) {
    localStorage.setItem('audioState', state); // 'playing' 或 'stopped'
}

// 播放或暂停音频
function toggleAudio() {
    // 如果音频未被创建，创建音频元素
    if (!audioElement) {
        audioElement = new Audio('audio/song.mp3');  // 设置音频文件的路径
        audioElement.loop = true;  // 设置为循环播放
    }

    // 检查音频是否已暂停
    if (audioElement.paused) {
        audioElement.play();
        setAudioState('playing');  // 音频开始播放
    } else {
        audioElement.pause();
        setAudioState('stopped');  // 音频暂停
    }
}

// 留言监听--message.html
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("message-form");
  const messageList = document.getElementById("message-list");

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const message = document.getElementById("message").value;

      if (username === "" || message === "") {
          alert("请输入完整的留言信息！");
          return;
      }

      const li = document.createElement("li");
      li.innerHTML = `<strong>${username}:</strong> <span>${message}</span>`;

      messageList.appendChild(li);

      document.getElementById("username").value = "";
      document.getElementById("message").value = "";
  });
});

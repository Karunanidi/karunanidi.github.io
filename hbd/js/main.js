

      var background = "https://k.top4top.io/p_2583a7wkk1.jpg";
      var foto = "https://k.top4top.io/p_2583a7wkk1.jpg";
      var musik = "music.mp3";
      var panggilan = "Cinta";
      var ucapan = "Happy Birthday my little sun,u know you may see the world too bright that i just realized there's something brigther than that. It's you ";

      var hadiah1 = "i love all parts of u, ur smile, ur eyes, ur laugh, breath, happiness, sad, even ur worst. I love everything about you";
      var hadiah2 = "u're so lovely, the way u talk, the way u think, and the way u hits different on me, nothing can compares to you";
      var hadiah3 = "ur not an angel , but sometimes an angel jealous with u, u're perfect with all ur imperfections.";
      var hadiah4 = "i wish u know that i rlly in love with u, i feel so deeply that u don't even know. i want u to know that no matter how hard things can be. I'll always be by ur side";

      var noWhatsapp = "+6285891263100";

      $(window).on("load", function () { $(".preload").fadeOut("slow"); }); 
      var audio = new Audio(musik); 
      audio.loop = true; 
      audio.autoplay = true; 
      var bg = document.querySelector(".bg"); 
      var fotoku = document.querySelector(".foto"); 
      var hai = document.querySelector(".hai"); 
      var pesanku = document.querySelector(".pesan"); 
      var open = document.querySelector(".open"); 
      var modal = document.querySelector(".modal"); 
      var kado = document.querySelector(".kado"); 
      var hadiah = ""; hai.innerHTML = panggilan; 
      open.style = "background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" + background + "');background-size: cover;"; bg.style = "background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" + background + "');background-size: cover;"; 
      document.querySelector(".fotoku").src = foto; 
      function ilang() { audio.play(); 
        open.style = "transition: 1.5s ease-out all; opacity: 0; transform: scale(100) translateY(20px); filter: brightness(0);"; 
        setTimeout(function () { open.style = "display:none;"; }, 1500); setTimeout(fotonya, 500); setTimeout(haiku, 1300); setTimeout(tampilPesan, 2000); 
      } 

      function fotonya() { fotoku.style = "opacity: 1; transform: rotateY(360deg);"; 
      } 
      
      function haiku() { hai.style = "opacity: 1; transform: translateY(0px);"; setTimeout(function () { hai.style = "opacity: 1; animation: anm 2s ease infinite;"; }, 700); 
      } 
      
      function tampilPesan() { pesanku.style = "opacity: 1;"; typeWriter(); 
      } 
      
      function tampilKado() { kado.style = "transform: translateY(0px); opacity: 1;"; 
      } 
      
      var i = 0; var speed = 120; var txt = ucapan; function typeWriter() { if (i < txt.length) { pesanku.innerHTML += txt.charAt(i); i++; setTimeout(typeWriter, speed); } else { tampilKado(); } 
      } 
      
      function randomAngka() { x = Math.random(); if (x >= 0 && x <= 0.25) { return 0; } else if (x > 0.25 && x <= 0.5) { return 1; } else if (x > 0.5 && x <= 0.75) { return 2; } else { return 3; } 
      } 
      
      function acak() { a = randomAngka(); b = randomAngka(); if (b == a) { b = randomAngka(); acak(); } else { c = randomAngka(); if (c == a || c == b) { c = randomAngka(); acak(); } else { d = randomAngka(); if (d == a || d == b || d == c) { d = randomAngka(); acak(); } } } 
      } 
      
      var data = [hadiah1, hadiah2, hadiah3, hadiah4]; 
      acak(); 
      const swalo = Swal.mixin({ confirmButtonColor: "#23a542", allowOutsideClick: false, showCancelButton: false, customClass: { popup: "border-radius", }, });
      function openModal() { if (hadiah == "") { 
        modal.style = "display: flex;"; setTimeout(function () { modal.style = "display: flex;top: 0; opacity: 1;"; }, 10); 
        } else { 
        swalo.fire({ hadiah, timer: 3000, confirmButtonColor: "#fff", timerProgressBar: true }); 
        } } 
        
      function closeModal() { modal.style = "top: 60vh;opacity: 0;display: flex;"; setTimeout(function () { modal.style = "display: none;"; }, 300); 
      } 
      
      async function pilihHadiah(z) { hadiah = data[z]; await swalo.fire(hadiah); balas(); 
      } 
      
      async function balas() { var { value: pesan } = await swalo.fire({ title: "Tulis harapan kamu di sini ya..", input: "text", confirmButtonText: "Kirim", }); 
      
      if (pesan) { 
        await swalo.fire("Kirim ke wa aku ya nya"); 
        location.assign("https://api.whatsapp.com/send?phone=" + 
        noWhatsapp + "&text=Hai,%0AAku mau harap, " + pesan); 
        modal.style = "top: 60vh;opacity: 0;display: flex;"; 
        setTimeout(function () { modal.style = "display: none;"; }, 300); 
        } else { 
        await swalo.fire({ confirmButtonText: "Iya deh", title: "Jangan dikosongin ya :)", }); balas(); } }
    

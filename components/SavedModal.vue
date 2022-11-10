<template>
    <transition name="modal-fade">
      <div class="modal-overlay" @click="$emit('close-modal')">
        <div class="modal" @click.stop>
          <h1>{{ $t('pop_up_text.title') }}</h1>
          <p>{{ $t('pop_up_text.description') }}</p>
        </div>
        <div class="close" @click="$emit('close-modal')">
          <img class="close-img" src="~/assets/css/close-icon.svg" alt="" />
        </div>
      </div>
    </transition>
  </template>

<script>
export default {}
</script>

  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }
  .modal {
    text-align: center;
    background-color: white;
    height: 300px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
  }
  .close {
    margin: 10% 0 0 16px;
    cursor: pointer;
  }
  .close-img {
    width: 25px;
  }
  .check {
    width: 150px;
  }
  h6 {
    font-weight: 500;
    font-size: 28px;
    margin: 20px 0;
  }
  p {
    /* font-weight: 500; */
    font-size: 16px;
    margin: 20px 0;
  }
  .modal-fade-leave-to {
    opacity: 0;
  }
  .modal-fade-leave-active {
    transition: opacity 0.5s ease;
  }
  </style>

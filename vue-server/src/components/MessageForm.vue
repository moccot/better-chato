<template>
    <form id="message-form" class="pure-form" @submit="sendMessage">
        <input ref="messageContent" v-model="messageContent" autocomplete="off" id="message-content" type="text"
            placeholder="Type your message here.">
        <button id="send-message" type="submit" class="pure-button pure-button-active">Send</button>
    </form>
</template>

<script lang="ts">
import { AxiosInstance } from 'axios';
import { Socket } from 'socket.io-client';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'MessageForm',
    data() {
        return {
            messageContent: ''
        };
    },
    props: {
        apiClient: {
            type: Function as PropType<AxiosInstance>,
            required: true
        },
        socketClient: {
            type: Object as PropType<Socket>,
            required: true
        }
    },
    methods: {
        sendMessage(event: Event) {
            event.preventDefault();

            this.socketClient.emit('new-message', this.messageContent);

            this.messageContent = '';
            (this.$refs.messageContent as HTMLInputElement).focus();
        }
    }
});
</script>

<style scoped>
form#message-form {
    width: 100%;
    background-color: var(--primary-color);
    padding: 10px;
    box-shadow: 0px 0px 7px 0px black;
}

input#message-content,
button#send-message {
    display: inline;
    margin: 0px;
    height: 34px;
}

input#message-content {
    width: calc(100% - 69.38px);
    border-radius: 5px 0px 0px 5px;
}

button#send-message {
    border-radius: 0px 5px 5px 0px;
    background-color: var(--tertiary-color) !important;
    color: var(--tertiary-text-color);
    width: 69.38px;
}
</style>

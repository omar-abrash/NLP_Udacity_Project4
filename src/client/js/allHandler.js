function allHandleSubmit(event) {
    event.preventDefault();

    Client.handleSubmit(event);
    Client.handleSubmitTwo(event);
}

export {
    allHandleSubmit
}

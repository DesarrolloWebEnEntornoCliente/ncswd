function main() {
    // select the target node
    var target = document.querySelector('#para');
    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
       // Whether you iterate over mutations..
       mutations.forEach(function (mutation) {
           // or use all mutation records is entirely up to you
           var entry = {
            mutation: mutation,
            type: mutation.type,
            el: mutation.target,
            value: mutation.target.textContent,
            oldValue: mutation.oldValue
          };
          console.log('Recording mutation:', entry);
       });
    });
    // configuration of the observer:
    var config = { attributes: true, childList: true, characterData: true };
    // pass in the target node, as well as the observer options
    observer.observe(target, config);
    // later, you can stop observing
    //observer.disconnect();
}
window.onload = main;

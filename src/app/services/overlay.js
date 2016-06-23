let overlay = () => {
  return {
    success : function() { console.log("success") },
    error   : function() { console.log("error") },
    loading : function() { console.log("loading") },
    hide    : function() { console.log("hide") }
  };
};

export default overlay;
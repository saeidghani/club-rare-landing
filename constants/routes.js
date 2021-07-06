const routes = {
  home: "/",
  staking: {
    index: "/staking",
    view(stakingId) {
      return `staking/${stakingId}`;
    },
  },
};

export default routes;

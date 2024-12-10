db.getSiblingDB("unifi").createUser({
    user: "unifi",
    pwd: "IzVH59u#6UPMH%C#%N3t",
    roles: [{ role: "dbOwner", db: "unifi" }],
  });
  db.getSiblingDB("unifi_stat").createUser({
    user: "unifi",
    pwd: "IzVH59u#6UPMH%C#%N3t",
    roles: [{ role: "dbOwner", db: "unifi_stat" }],
  });
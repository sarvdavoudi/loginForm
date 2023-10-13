const handler = async (req, res) => {
  setTimeout(() => {
    res.status(200).json({
      status: true,
      token: "123456789",
      message: "registerd successfully",
    });
  }, 1000);
};
export default handler;

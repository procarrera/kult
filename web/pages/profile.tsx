import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import FakeContent from "../src/components/FakeContent";
import api from "../src/services/api";
import useFetch from "../src/utils/dataFetcher";

export default function Profile() {
  const id = "5fe6c68e60f4190ca3cb6b46";
  const router = useRouter();
  const [newAvatar, setNewAvatar] = useState<File>();

  const { data } = useFetch(`/user/${id}`);

  async function handleFormSubmit(event: FormEvent) {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    event.preventDefault();
    const data = new FormData();
    data.append("avatar", newAvatar);
    try {
      const response = await api.put(`/user/${id}`, data, config);
      if (response.data) {
        //Handle errors here passing params in routes
        setNewAvatar(null);
        router.push({
          pathname: "/",
          query: { new: true },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // PAGE STILL LOADING //
  if (!data) return <FakeContent />;

  // PAGE CONTENT LOADED //
  return (
    <div className="flex flex-col bg-kult-secondary min-h-screen px-8 pt-10 md:pt-6">
      <div className="w-60 h-auto relative">
        {newAvatar ? (
          <img
            className="w-60 h-60 rounded-full opacity-70"
            src={URL.createObjectURL(newAvatar)}
            alt=""
          />
        ) : (
          <img
            className="w-60 h-60 rounded-full"
            src={data.user.avatar_url}
            alt=""
          />
        )}
        <form method="PUT">
          <input
            id="avatar"
            type="file"
            accept="image/*"
            className="invisible h-0 w-0"
            onChange={(e) => {
              setNewAvatar(e.target.files[0]);
            }}
          />
          <label
            htmlFor="avatar"
            className="absolute bottom-5 right-8 bg-kult-secondary rounded-full p-4 cursor-pointer opacity-70 hover:opacity-100"
          >
            {newAvatar ? (
              <button
                className="w-12 h-12 focus:outline-none"
                type="submit"
                onClick={handleFormSubmit}
              >
                <img
                  className="w-full animate-bounce"
                  src="/upload.svg"
                  alt=""
                />
                <span className="text-xs absolute bottom-2 right-5 font-bold leading-3">
                  click to <br />
                  upload
                </span>
              </button>
            ) : (
              <img className="w-8 h-auto" src="/camera.svg" alt="" />
            )}
          </label>
        </form>
      </div>

      <div>
        <h1 className="text-5xl font-bold">{data.user.name}</h1>
      </div>
    </div>
  );
}

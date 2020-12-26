import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import api from "../src/services/api";
import useFetch from "../src/utils/dataFetcher";

export default function Profile() {
  const router = useRouter();
  const id = "5fe6c68e60f4190ca3cb6b46";

  const [loading, setLoading] = useState<Boolean>(false);
  const [newAvatar, setNewAvatar] = useState<File>();

  async function handleFormSubmit(event: FormEvent) {
    setLoading(true);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    event.preventDefault();
    const data = new FormData();
    data.append("avatar", newAvatar);
    console.log(newAvatar);
    try {
      const response = await api.put(`/user/${id}`, data, config);
      console.log(response);
      if (response.data) {
        //Handle errors here passing params in routes
        setLoading(false);
        setNewAvatar(null);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { data } = useFetch(`/user/${id}`);

  if (!data) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-col bg-kult-secondary min-h-full px-8 pt-6">
      <div className="w-60 h-auto relative">
        {loading ? (
          <img className="w-60 h-60 rounded-full" src="kult.svg" alt="" />
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
            className="absolute bottom-5 right-8 bg-kult-secondary rounded-full p-2 cursor-pointer"
          >
            <img className="w-8 h-auto" src="/camera.svg" alt="" />
          </label>
          {newAvatar && (
            <button type="submit" onClick={handleFormSubmit}>
              upload
            </button>
          )}
        </form>
      </div>

      <div>
        <h1 className="text-5xl font-bold">{data.user.name}</h1>
      </div>
    </div>
  );
}
